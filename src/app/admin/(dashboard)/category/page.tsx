"use client";

import { categoryQueryKeys, getAllCategories } from "@/api/category";
import EmptyStatus from "@/components/common/status/EmptyStatus";
import ErrorStatus from "@/components/common/status/ErrorStatus";
import LoadingStatus from "@/components/common/status/LoadingStatus";
import Input from "@/components/forms/elements/Input";
import Select from "@/components/forms/elements/Select";
import { useAdminCategoryFilter } from "@/hooks/filtering";
import { Routes } from "@/utils/constants/routes";
import { adminCategoriesSelectOptions } from "@/utils/constants/selectOptions";
import { useQuery } from "@tanstack/react-query";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import CategoryCard from "./_components/CategoryCard";

export default function AdminCategoriesPage() {
  // TODO: Fetch categories from API
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery(categoryQueryKeys.getAllAdmin, getAllCategories);

  const { filteredCategories, name, orderBy } = useAdminCategoryFilter(
    categories ?? []
  );
  return (
    <section className="relative">
      <h1 className="font-bold text-xl leading-relaxed">Categorias Criadas</h1>
      <div className="mt-8 space-y-2 lg:flex items-center gap-4">
        <div className="flex-[2]">
          <Input
            {...name}
            icon={<Search />}
            autoFocus
            label="Pesquisa"
            placeholder="Pesquise por nome aqui..."
          />
        </div>
        <div className="flex-1">
          <Select
            label="Ordenar por"
            {...orderBy}
            options={adminCategoriesSelectOptions}
          />
        </div>
      </div>
      {isLoading && <LoadingStatus message="Carregando as categorias" />}
      {isError && <ErrorStatus message={(error as Error).message} />}
      {categories &&
        filteredCategories &&
        (filteredCategories.length === 0 ? (
          <EmptyStatus
            heading="Nenhuma categoria encontrada"
            message="Crie uma nova categoria para que ela apareça aqui."
          />
        ) : (
          <>
            <p className="mt-4">
              {filteredCategories.length} categorias encontradas
            </p>
            <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 items-center gap-4">
              {filteredCategories.map(
                ({
                  cardImageUrl,
                  id,
                  name,
                  numberOfProjects,
                  numberOfServices,
                  slug,
                }) => (
                  <CategoryCard
                    key={id}
                    slug={slug}
                    imageURL={cardImageUrl}
                    createdBy="Rafael Padre"
                    name={name}
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
        <Plus />
      </Link>
    </section>
  );
}
