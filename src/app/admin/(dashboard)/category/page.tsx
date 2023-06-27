"use client";

import { categoryQueryKeys, getAllCategories } from "@/api/category";
import EmptyStatus from "@/components/common/status/EmptyStatus";
import ErrorStatus from "@/components/common/status/ErrorStatus";
import LoadingStatus from "@/components/common/status/LoadingStatus";
import Input from "@/components/forms/elements/Input";
import Select from "@/components/forms/elements/Select";
import { useAuth } from "@/context/AuthContext";
import { useAdminCategoryFilter } from "@/hooks/filtering";
import { Routes } from "@/utils/constants/routes";
import { adminCategoriesSelectOptions } from "@/utils/constants/selectOptions";
import { useQuery } from "@tanstack/react-query";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import CategoryCard from "./_components/CategoryCard";

export default function AdminCategoriesPage() {
  const { token } = useAuth();
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery(categoryQueryKeys.getAllAdmin, () => getAllCategories(token));
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
                  createdAt,
                  createdBy,
                  mainImageURL,
                  name,
                  totalProjects,
                  totalServices,
                  id,
                }) => {
                  return (
                    <CategoryCard
                      createdAt={createdAt}
                      createdBy={`${createdBy.firstName} ${createdBy.lastName}`}
                      imageURL={mainImageURL}
                      name={name}
                      numberProjects={totalProjects}
                      numberServices={totalServices}
                      key={id}
                      id={id}
                    />
                  );
                }
              )}
            </div>
          </>
        ))}
      {/* TODO: Add pagination here */}
      <div></div>
      <Link
        href={Routes.adminCreateCategory}
        title="Criar categoria"
        className="fixed bottom-4 right-4 bg-primary-500 hover:bg-primary-600 text-white p-4 rounded-full shadow-lg"
      >
        <Plus size={24} />
      </Link>
    </section>
  );
}
