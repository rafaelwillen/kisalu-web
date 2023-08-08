"use client";

import { CreateServiceRequestBody } from "@/api/types/request";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import LoadingStatus from "@/components/common/status/LoadingStatus";
import Checkbox from "@/components/forms/elements/Checkbox";
import ImageInput from "@/components/forms/elements/ImageInput";
import Input from "@/components/forms/elements/Input";
import Select from "@/components/forms/elements/Select";
import TextArea from "@/components/forms/elements/TextArea";
import useCreateServiceMutation from "@/hooks/mutations/useCreateServiceMutation";
import useCategoriesSelectOptions from "@/hooks/query/useCategoriesSelectOptions";
import { Routes } from "@/utils/constants/routes";
import {
  ServiceBasicInformationCreationFormType,
  serviceBasicInformationCreationSchema,
} from "@/utils/schemas/serviceBasicInformationCreationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquareDashedIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function ServiceForm() {
  const router = useRouter();
  const { categoryOptions, isLoading: isLoadingTheCategories } =
    useCategoriesSelectOptions();
  const { createService, isLoading, uploadBannerImage } =
    useCreateServiceMutation();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ServiceBasicInformationCreationFormType>({
    resolver: zodResolver(serviceBasicInformationCreationSchema),
  });

  async function formSubmissionHandler(
    data: ServiceBasicInformationCreationFormType
  ) {
    const { bannerImage, ...serviceTextData } = data;
    let bannerImageURL: string | undefined;
    if (bannerImage) {
      bannerImageURL = (await uploadBannerImage(bannerImage))?.url;
      if (!bannerImageURL) {
        toast.error("Ocorreu um erro ao criar o serviço");
        return;
      }
    }
    const service: CreateServiceRequestBody = {
      ...serviceTextData,
      bannerImageURL,
    };
    await createService(service);
    toast.success("Serviço criado com sucesso");
    router.replace(Routes.providerServices);
  }

  return isLoadingTheCategories ? (
    <LoadingStatus message="Carregando o formulário" />
  ) : (
    <form
      onSubmit={handleSubmit(formSubmissionHandler)}
      noValidate
      className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2"
    >
      <div className="col-span-full">
        <Controller
          control={control}
          name="bannerImage"
          render={({ field: { onChange, value, ...field }, fieldState }) => (
            <ImageInput
              label="Banner do Serviço"
              selectedImage={value}
              onImageSelect={onChange}
              {...field}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </div>
      <Input
        required
        label="Título do Serviço"
        {...register("title")}
        errorMessage={errors.title?.message}
      />
      <Input
        required
        label="Preço Mínimo"
        {...register("minimumPrice")}
        errorMessage={errors.minimumPrice?.message}
      />
      <Controller
        control={control}
        name="categoryName"
        render={({ field: { onChange, value, ...field }, fieldState }) => (
          <Select
            required
            label="Categoria"
            options={categoryOptions}
            selectedValue={value}
            onValueSelect={onChange}
            {...field}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <TextArea
        required
        label="Descrição"
        {...register("description")}
        errorMessage={errors.description?.message}
      />
      <div className="col-span-full">
        <Controller
          control={control}
          name="isHighlighted"
          defaultValue={false}
          render={({ field, fieldState }) => (
            <Checkbox
              {...field}
              errorMessage={fieldState.error?.message}
              label="Colocar em destaque no seu perfil"
            />
          )}
        />
      </div>
      <div className="col-span-full">
        <PrimaryButton fitContent isLoading={isLoading}>
          Salvar <MessageSquareDashedIcon />
        </PrimaryButton>
      </div>
    </form>
  );
}
