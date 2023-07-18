"use client";

import { ExperienceInfo, deleteExperience } from "@/api/experienceInfo";
import { useAuth } from "@/context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

type Props = {
  experience: ExperienceInfo;
  index: number;
};

export default function ExperienceInfoItem({ experience, index }: Props) {
  const router = useRouter();
  const { token } = useAuth();
  const { mutateAsync } = useMutation(
    () => deleteExperience(experience.id, token),
    {
      onSuccess: () => router.refresh(),
    }
  );

  async function deleteExperienceHandler() {
    toast.promise(mutateAsync(), {
      loading: "A eliminar experiência...",
      success: "Experiência eliminada com sucesso!",
      error: "Não foi possível eliminar a experiência.",
    });
  }

  function formatDateString(dateString?: string) {
    if (!dateString) return undefined;
    return new Date(dateString).toLocaleDateString("pt-AO", {
      year: "numeric",
      month: "long",
    });
  }

  return (
    <div
      key={experience.id}
      className="flex gap-5 items-start border-b border-neutral-200 pb-4 last:border-b-0 last:pb-0 relative"
    >
      <p className="p-2 bg-accent-200 text-accent-500 rounded-full w-7 h-7 flex items-center justify-center">
        {index + 1}
      </p>
      <div className="space-y-1 flex-1">
        <p className="bg-secondary-100 rounded-full px-2 md:px-5 py-1 text-xs w-fit capitalize">
          {formatDateString(experience.startDate)} -{" "}
          {formatDateString(experience.endDate) ?? "Em progresso"}
        </p>
        <p className="font-medium">{experience.title}</p>
        <p className="text-accent-500 font-medium">
          {experience.institutionName}
        </p>
        <p className="text-text-100 leading-relaxed">
          {experience.description}
        </p>
      </div>
      <div className="flex gap-1">
        {/* Show when the edit is done */}
        {/* <button

          aria-label="Editar experiência"
          className="text-accent-600 hover:text-accent-60 p-2 bg-accent-100 rounded hover:bg-accent-200 duration-200"
        >
          <PencilIcon size={18} />
        </button> */}
        <button
          onClick={deleteExperienceHandler}
          type="button"
          aria-label="Eliminar experiência"
          className="text-danger hover:text-accent-60 p-2 md:p-3 bg-accent-100 rounded hover:bg-accent-200 duration-200"
        >
          <Trash2Icon size={18} />
        </button>
      </div>
    </div>
  );
}
