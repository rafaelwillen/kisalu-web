"use client";

import { categoryQueryKeys, getAllCategoriesFromAdmin } from "@/api/category";
import { GetAllCategoriesResponseBody } from "@/api/types/response";
import EmptyStatus from "@/components/common/status/EmptyStatus";
import ErrorStatus from "@/components/common/status/ErrorStatus";
import Input from "@/components/forms/elements/Input";
import Select from "@/components/forms/elements/Select";
import { useAdminCategoryFilter } from "@/hooks/filtering";
import { adminCategoriesSelectOptions } from "@/utils/constants/selectOptions";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import CategoriesLoadingSkeleton from "./CategoriesLoadingSkeleton";
import CategoryCard from "./CategoryCard";

type Props = {
  initialCategories: GetAllCategoriesResponseBody;
  token?: string;
};

export default function CategoriesListClient({
  initialCategories,
  token,
}: Props) {
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery(
    categoryQueryKeys.getAllAdmin,
    () => getAllCategoriesFromAdmin(token),
    { initialData: initialCategories }
  );
  const { filteredCategories, name, orderBy } =
    useAdminCategoryFilter(categories);
  return (
    <>
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
      {isLoading && <CategoriesLoadingSkeleton />}
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
    </>
  );
}
