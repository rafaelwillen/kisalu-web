"use client";

import { deleteCategory } from "@/api/category";
import DangerButton from "@/components/buttons/DangerButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Routes } from "@/utils/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

type Props = {
  categoryId: string;
  token?: string;
};

export default function CategoryActions({ categoryId, token }: Props) {
  const routes = useRouter();
  const { isLoading, mutateAsync } = useMutation(
    () => deleteCategory(categoryId, token),
    {
      onError: (error) => {
        toast.error((error as Error).message);
      },
      onSuccess: () => {
        toast.success("Categoria eliminada com sucesso!");
        routes.push(Routes.adminCategories);
      },
    }
  );

  return (
    <div className="py-4 flex gap-4 items-center">
      <PrimaryButton disabled>Editar</PrimaryButton>
      <DangerButton isLoading={isLoading} onClick={() => mutateAsync()}>
        Eliminar
      </DangerButton>
    </div>
  );
}
