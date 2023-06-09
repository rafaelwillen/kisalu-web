"use client";

import { useCreateCategoryMutation } from "@/hooks/mutations";
import { Routes } from "@/utils/constants/routes";
import {
  NewCategoryFormType,
  newCategorySchema,
} from "@/utils/schemas/newCategorySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import PrimaryButton from "../buttons/PrimaryButton";
import ImageInput from "./elements/ImageInput";
import Input from "./elements/Input";
import TextArea from "./elements/TextArea";

export default function AdminCreateCategoryForm() {
  const router = useRouter();

  const { createCategoryMutation, isLoading, uploadFileMutation } =
    useCreateCategoryMutation();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewCategoryFormType>({
    resolver: zodResolver(newCategorySchema),
  });

  async function createCategory(data: NewCategoryFormType) {
    const { banner, card, description, name } = data;
    const [bannerResponse, cardResponse] = await Promise.all([
      uploadFileMutation.mutateAsync(banner),
      uploadFileMutation.mutateAsync(card),
    ]);
    if (!bannerResponse || !cardResponse) {
      toast.error("Ocorreu um erro ao criar a categoria");
      return;
    }
    const category = {
      description,
      name,
      bannerImageURL: bannerResponse.url,
      mainImageURL: cardResponse.url,
    };
    await createCategoryMutation.mutateAsync(category);
    toast.success("Categoria criada com sucesso");
    router.replace(Routes.adminCategories);
  }

  return (
    <form
      className="my-4 space-y-8 lg:border border-neutral-100 lg:p-8 rounded-md"
      onSubmit={handleSubmit(createCategory)}
      noValidate
    >
      <Controller
        control={control}
        name="banner"
        render={({
          field: { onChange, value, ...props },
          fieldState: { error },
        }) => (
          <ImageInput
            onImageSelect={onChange}
            selectedImage={value}
            errorMessage={error?.message}
            height={288}
            {...props}
            label="Clique aqui para adicionar o banner da
      categoria"
          />
        )}
      />
      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8">
        <Controller
          control={control}
          name="card"
          render={({
            field: { onChange, value, ...props },
            fieldState: { error },
          }) => (
            <div className="max-w-[330px]">
              <ImageInput
                width={330}
                height={245}
                onImageSelect={onChange}
                selectedImage={value}
                errorMessage={error?.message}
                {...props}
                label="Clique aqui para adicionar a imagem da
      categoria"
              />
            </div>
          )}
        />
        <div>
          <Input
            label="Nome da Categoria"
            required
            {...register("name")}
            errorMessage={errors.name?.message}
          />
          <TextArea
            label="Descrição"
            {...register("description")}
            errorMessage={errors.description?.message}
            required
          />
        </div>
      </div>
      <p className="text-sm text-text-100">* - Campos obrigatórios</p>
      <div className=" max-w-xs mx-auto">
        <PrimaryButton isLoading={isLoading} type="submit">
          Criar Categoria
        </PrimaryButton>
      </div>
    </form>
  );
}
