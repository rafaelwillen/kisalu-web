import { useMemo, useState } from "react";

type CategoryNameAndLink = {
  name: string;
  link: string;
};

export default function useCategoryNameSearch(
  initialData: CategoryNameAndLink[]
) {
  const [searchQuery, setSearchQuery] = useState("");

  const filterByName = (category: CategoryNameAndLink) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase());

  const filteredCategories = useMemo(
    () => initialData.filter(filterByName),
    [searchQuery, initialData]
  );

  return {
    filteredCategories,
    searchQuery: {
      value: searchQuery,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearchQuery(e.target.value),
    },
  };
}
