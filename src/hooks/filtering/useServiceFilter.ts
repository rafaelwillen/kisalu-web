import { GetAllServicesFromProvider } from "@/api/types/response";
import { servicesStatusSelectOptions } from "@/utils/constants/selectOptions";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

export default function useServiceFilter(services: GetAllServicesFromProvider) {
  const searchParams = useSearchParams();
  const status =
    searchParams.get("status") ?? servicesStatusSelectOptions[0].value;
  const [searchValue, setSearchValue] = useState("");

  const filteredServices = useMemo(
    () =>
      services
        .filter(({ state }) => state === status)
        .filter(({ title }) =>
          title.toLowerCase().includes(searchValue.toLowerCase())
        ),
    [services, status, searchValue]
  );
  const emptyServices = filteredServices.length === 0;
  return {
    status,
    searchValue,
    setSearchValue,
    filteredServices,
    emptyServices,
  };
}
