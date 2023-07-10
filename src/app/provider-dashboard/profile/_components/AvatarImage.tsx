"use client";

import useAvatarImageMutation from "@/hooks/mutations/useAvatarImageMutation";
import { PencilIcon, SaveIcon, TrashIcon, UndoIcon } from "lucide-react";
import Image from "next/image";

type Props = {
  currentAvatarImageURL: string;
  token: string;
};

export default function AvatarImage({ currentAvatarImageURL, token }: Props) {
  const {
    isEditing,
    removeAvatar,
    saveAvatar,
    selectedImageURL,
    undoAvatarEditing,
    updateImage,
  } = useAvatarImageMutation(currentAvatarImageURL, token);

  return (
    <div className="grid grid-cols-[auto,1fr] gap-4">
      <div className="relative w-fit self-center row-span-2">
        <Image
          loading="eager"
          src={selectedImageURL}
          alt="Avatar do Utilizador"
          width={90}
          height={90}
          className="rounded-full object-cover bg-white shadow-md"
        />
        <label
          htmlFor="avatar-image"
          className="cursor-pointer absolute -bottom-2 -right-1 rounded-full bg-white hover:bg-accent-400 duration-300 shadow-md p-2 hover:text-white"
          aria-label="Alterar imagem de perfil"
        >
          <PencilIcon className="w-5 h-5" />
        </label>
        <input
          accept="image/*"
          onChange={updateImage}
          type="file"
          name="avatar-image"
          id="avatar-image"
          className="appearance-none hidden w-0 h-0"
        />
      </div>
      <div className="space-x-2">
        <button
          onClick={() => (isEditing ? undoAvatarEditing() : removeAvatar())}
          type="button"
          className="bg-danger w-fit h-fit self-center p-2 text-white rounded-md shadow-md duration-300"
          aria-label={!isEditing ? "Eliminar foto" : "Cancelar alterações"}
        >
          {!isEditing ? <TrashIcon /> : <UndoIcon />}
        </button>
        {isEditing && (
          <button
            onClick={saveAvatar}
            className="bg-accent-500 w-fit h-fit self-center p-2 text-white rounded-md shadow-md duration-300"
            type="button"
            aria-label="Guardar alterações"
          >
            <SaveIcon />
          </button>
        )}
      </div>
      <p className="max-lg:text-sm text-justify sm:justify-start">
        Tamanho máximo do ficheiro: 1MB, Dimensão recomendada: 150x150 E os
        ficheiros suportados são .jpg e .png
      </p>
    </div>
  );
}
