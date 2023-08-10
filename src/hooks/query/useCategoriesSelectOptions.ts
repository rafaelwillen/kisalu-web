import { categoryQueryKeys, getAllPublicCategories } from "@/api/category";
import { SelectOption } from "@/utils/constants/selectOptions";
import { useQuery } from "@tanstack/react-query";

export default function useCategoriesSelectOptions() {
  const { data, isLoading } = useQuery(
    categoryQueryKeys.getAllPublicCategories,
    getAllPublicCategories,
    {
      refetchOnWindowFocus: false,
      initialData: [],
    }
  );

  const categoryOptions: SelectOption[] = data.map(({ name }) => ({
    value: name,
    label: name,
  }));

  return {
    categoryOptions,
    isLoading,
  };
}
