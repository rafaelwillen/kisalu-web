import { updateProviderAvatarImage } from "@/api/provider";
import { uploadImage } from "@/api/upload";
import { useAuth } from "@/context/AuthContext";
import { DEFAULT_USER_AVATAR_API_URL } from "@/utils/constants";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ChangeEvent, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function useAvatarImageMutation(
  currentAvatarImageURL: string,
  token?: string
) {
  const { user } = useAuth();
  const [selectedImageURL, setSelectedImageURL] = useState(
    currentAvatarImageURL
  );
  const [isEditing, setIsEditing] = useState(false);
  const selectedFile = useRef<File | null>();

  const uploadAvatarImageMutation = useMutation((file: File) =>
    uploadImage(file, "avatar")
  );
  const updateAvatarImageMutation = useMutation(async (file: File) => {
    const response = await uploadAvatarImageMutation.mutateAsync(file);
    if (!response) throw new Error("No response from uploadImage");
    return updateProviderAvatarImage(response.url, token);
  });
  const resetAvatarImageMutation = useMutation(() =>
    updateProviderAvatarImage(
      DEFAULT_USER_AVATAR_API_URL.concat(
        `/seed=${user?.firstName}${user?.lastName}`
      ),
      token
    )
  );
  const router = useRouter();

  function updateImage(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.item(0);
    if (!file) return;
    setSelectedImageURL(URL.createObjectURL(file));
    setIsEditing(true);
    selectedFile.current = file;
  }

  function undoAvatarEditing() {
    setSelectedImageURL(currentAvatarImageURL);
    setIsEditing(false);
    selectedFile.current = null;
  }

  async function removeAvatar() {
    await toast.promise(resetAvatarImageMutation.mutateAsync(), {
      loading: "A remover imagem de perfil...",
      success: "Imagem de perfil removida com sucesso",
      error: "Não foi possível remover a imagem de perfil",
    });
    router.refresh();
    undoAvatarEditing();
  }

  async function saveAvatar() {
    await toast.promise(
      updateAvatarImageMutation.mutateAsync(selectedFile.current!),
      {
        loading: "A atualizar imagem de perfil...",
        success: "Imagem de perfil atualizada com sucesso",
        error: "Não foi possível atualizar a imagem de perfil",
      }
    );
    router.refresh();
  }

  return {
    selectedImageURL,
    updateImage,
    isEditing,
    undoAvatarEditing,
    removeAvatar,
    saveAvatar,
  };
}
