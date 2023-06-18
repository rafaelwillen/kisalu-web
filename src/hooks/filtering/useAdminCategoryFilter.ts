import { GetAllCategoriesResponseBody } from "@/api/types/response";
import { adminCategoriesSelectOptions } from "@/utils/constants/selectOptions";
import { useMemo, useState } from "react";

type Category = GetAllCategoriesResponseBody[number];

export default function useAdminCategoryFilter(
  categories: GetAllCategoriesResponseBody
) {
  const [searchName, setSearchName] = useState("");
  const [selectedOrderBy, setSelectedOrderBy] = useState(
    adminCategoriesSelectOptions[0].value
  );

  const filterByName = (category: Category) =>
    category.name.toLowerCase().includes(searchName.toLowerCase());

  const orderFunction = (a: Category, b: Category) => {
    if (selectedOrderBy.startsWith("name")) {
      return selectedOrderBy.includes("asc")
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    }
    if (selectedOrderBy.startsWith("number-services")) {
      return selectedOrderBy.includes("asc")
        ? a.totalServices - b.totalServices
        : b.totalServices - a.totalServices;
    }
    if (selectedOrderBy.startsWith("number-projects")) {
      return selectedOrderBy.includes("asc")
        ? a.totalProjects - b.totalProjects
        : b.totalProjects - a.totalProjects;
    }
    return 0;
  };

  const filteredCategories = useMemo(
    () => categories?.filter(filterByName).sort(orderFunction),
    [categories, searchName, selectedOrderBy]
  );

  return {
    filteredCategories,
    name: {
      value: searchName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearchName(e.target.value),
    },
    orderBy: {
      value: selectedOrderBy,
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
        setSelectedOrderBy(e.target.value),
    },
  };
}
