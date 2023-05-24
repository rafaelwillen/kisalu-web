import { CreateCategoryRequestDataType } from "@/api/admin/category";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { ImageInput, Input, TextArea } from "@/components/form";
import { AdminDashboardLayout } from "@/components/layouts";
import { useCreateCategoryMutation } from "@/hooks/mutations";
import { NextPageWithLayout } from "@/pages/_app";
import { Routes } from "@/utils/constants/routes";
import {
  NewCategoryFormType,
  newCategorySchema,
} from "@/utils/schemas/newCategorySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";

const AdminCreateCategoryPage: NextPageWithLayout = () => {
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
      return;
    }
    const category: CreateCategoryRequestDataType = {
      description,
      name,
      bannerImageUrl: bannerResponse.url,
      cardImageUrl: cardResponse.url,
    };
    await createCategoryMutation.mutateAsync(category);
    router.replace(Routes.adminCategories);
  }

  return (
    <section>
      <h1 className="font-bold text-xl leading-relaxed">Criar Categoria</h1>
      <form
        className="my-4 space-y-8"
        onSubmit={handleSubmit(createCategory)}
        noValidate
      >
        <Input
          label="Nome da Categoria"
          required
          {...register("name")}
          errorMessage={errors.name?.message}
        />
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
              {...props}
              label="Clique aqui para adicionar o banner da
          categoria"
            />
          )}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Controller
            control={control}
            name="card"
            render={({
              field: { onChange, value, ...props },
              fieldState: { error },
            }) => (
              <ImageInput
                onImageSelect={onChange}
                selectedImage={value}
                errorMessage={error?.message}
                {...props}
                label="Clique aqui para adicionar a imagem da
          categoria"
              />
            )}
          />
          <TextArea
            label="Descrição"
            {...register("description")}
            errorMessage={errors.description?.message}
            required
          />
        </div>
        <PrimaryButton isLoading={isLoading} type="submit">
          Criar Categoria
        </PrimaryButton>
      </form>
      <p className="text-sm">* - Campos obrigatórios</p>
    </section>
  );
};

AdminCreateCategoryPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default AdminCreateCategoryPage;
