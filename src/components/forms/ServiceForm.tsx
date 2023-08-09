"use client";

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
import { Controller, FormProvider, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import FeaturedImagesInput from "./elements/FeaturedImagesInput";
import NumberInput from "./elements/NumberInput";

export default function ServiceForm() {
  const router = useRouter();
  const { categoryOptions, isLoading: isLoadingTheCategories } =
    useCategoriesSelectOptions();
  const { createService, isLoading, uploadImage } = useCreateServiceMutation();
  const methods = useForm<ServiceBasicInformationCreationFormType>({
    resolver: zodResolver(serviceBasicInformationCreationSchema),
  });
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  async function formSubmissionHandler(
    data: ServiceBasicInformationCreationFormType
  ) {
    const { bannerImage, featuredImages, ...serviceTextData } = data;
    let bannerImageURL: string | undefined;
    const featuredImagesURLs: string[] = [];
    if (bannerImage) {
      const [bannerImageResponse, ...featuredImagesResponse] =
        await Promise.all([
          uploadImage(bannerImage),
          ...featuredImages.map(({ file }) => uploadImage(file)),
        ]);
      bannerImageURL = bannerImageResponse?.url;
      if (!bannerImageURL || featuredImagesResponse.some((r) => !r?.url)) {
        toast.error("Ocorreu um erro ao criar o serviço");
        return;
      }
      featuredImagesURLs.push(...featuredImagesResponse.map((r) => r!.url));
    } else {
      const featuredImagesResponse = await Promise.all(
        featuredImages.map(({ file }) => uploadImage(file))
      );
      if (featuredImagesResponse.some((r) => !r?.url)) {
        toast.error("Ocorreu um erro ao criar o serviço");
        return;
      }
      featuredImagesURLs.push(...featuredImagesResponse.map((r) => r!.url));
    }
    await createService({
      ...serviceTextData,
      bannerImageURL,
      featuredImagesURL: featuredImagesURLs,
    });
    toast.success("Serviço criado com sucesso");
    router.replace(Routes.providerServices);
  }

  return isLoadingTheCategories ? (
    <LoadingStatus message="Carregando o formulário" />
  ) : (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(formSubmissionHandler)} noValidate>
        <h2 className="text-lg  font-medium pb-2 lg:pb-5 border-b border-b-neutral-200 ">
          Informações Básicas
        </h2>
        <div className="my-6 grid gap-4 grid-cols-1 md:grid-cols-2">
          <div className="col-span-full">
            <Controller
              control={control}
              name="bannerImage"
              render={({
                field: { onChange, value, ...field },
                fieldState,
              }) => (
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
          <Controller
            control={control}
            name="minimumPrice"
            render={({ field, fieldState: { error } }) => (
              <NumberInput
                {...field}
                label="Preço Mínimo"
                required
                errorMessage={error?.message}
              />
            )}
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
          <Input
            {...register("deliveryTime")}
            label="Tempo de Entrega"
            required
            errorMessage={errors.deliveryTime?.message}
          />
          <div className="col-span-full">
            <TextArea
              required
              label="Descrição"
              {...register("description")}
              errorMessage={errors.description?.message}
            />
          </div>
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
        </div>
        <h2 className="text-lg font-medium pb-2 lg:pb-5 border-b border-b-neutral-200">
          Imagens em Destaque
        </h2>
        <FeaturedImagesInput />
        <PrimaryButton fitContent isLoading={isLoading}>
          Salvar <MessageSquareDashedIcon />
        </PrimaryButton>
      </form>
    </FormProvider>
  );
}
