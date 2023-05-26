import CategoryAPI, { categoriesQueryKeys } from "@/api/admin/category";
import { EmptyState, ErrorState, LoadingState } from "@/components/elements";
import { Input, Select } from "@/components/form";
import { AdminDashboardLayout } from "@/components/layouts";
import { CategoryCard } from "@/components/pages/admin";
import { Routes } from "@/utils/constants/routes";
import { adminCategoriesSelectOptions } from "@/utils/constants/selectOptions";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { NextPageWithLayout } from "../../_app";

const AdminCategoriesPage: NextPageWithLayout = () => {
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery([categoriesQueryKeys.getAll], CategoryAPI.getAll);

  return (
    <section className="relative">
      <h1 className="font-bold text-xl leading-relaxed">Categorias Criadas</h1>
      <div className="mt-8 space-y-2 lg:flex items-center gap-4">
        <div className="flex-[2]">
          <Input
            icon={<MagnifyingGlass />}
            autoFocus
            label="Pesquisa"
            placeholder="Pesquise por nome aqui..."
          />
        </div>
        <div className="flex-1">
          <Select label="Ordenar por" options={adminCategoriesSelectOptions} />
        </div>
      </div>
      {isLoading && <LoadingState message="Carregando as categorias" />}
      {isError && <ErrorState message={(error as Error).message} />}
      {categories &&
        (categories.length === 0 ? (
          <EmptyState
            heading="Nenhuma categoria encontrada"
            message="Crie uma nova categoria para que ela apareça aqui."
          />
        ) : (
          <>
            <p className="mt-4">{categories.length} categorias encontradas</p>
            <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 items-center gap-4">
              {categories.map(
                ({
                  cardImageUrl,
                  id,
                  name,
                  numberOfProjects,
                  numberOfServices,
                }) => (
                  <CategoryCard
                    key={id}
                    imageURL={cardImageUrl}
                    createdBy="Rafael Padre"
                    name={name}
                    numberActivities={0}
                    numberProjects={numberOfProjects}
                    numberServices={numberOfServices}
                  />
                )
              )}
            </div>
          </>
        ))}
      {/* TODO: Add pagination here */}
      <div></div>
      <Link
        href={Routes.adminCreateCategory}
        className="fixed bottom-4 right-4 bg-primary-400 p-4 lg:p-3 rounded-full lg:rounded-xl flex gap-2 items-center hover:bg-primary-300 hover:duration-200 duration-200"
      >
        <span className="max-lg:hidden">Criar Categoria</span>
        <Plus weight="bold" />
      </Link>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    [categoriesQueryKeys.getAll],
    CategoryAPI.getAll
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

AdminCategoriesPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default AdminCategoriesPage;
