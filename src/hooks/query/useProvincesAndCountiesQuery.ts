import {
  addressQueryKeys,
  getAllCountiesFromProvince,
  getAllProvinces,
} from "@/api/address";
import { SelectOption } from "@/utils/constants/selectOptions";
import { useQuery } from "@tanstack/react-query";

export default function useProvincesAndCountiesQuery(selectedProvince: string) {
  const provincesQuery = useQuery(
    addressQueryKeys.allProvinces,
    getAllProvinces,
    { initialData: [], refetchOnWindowFocus: false }
  );
  const countiesQuery = useQuery(
    addressQueryKeys.allCountiesFromProvince(selectedProvince),
    () => getAllCountiesFromProvince(selectedProvince),
    { initialData: [], refetchOnWindowFocus: false }
  );

  const provincesSelectOptions: SelectOption[] = provincesQuery.data.map(
    (province) => ({
      label: province,
      value: province,
    })
  );
  const countiesSelectOptions: SelectOption[] = countiesQuery.data.map(
    (county) => ({
      label: county,
      value: county,
    })
  );
  return {
    provincesSelectOptions,
    countiesSelectOptions,
  };
}
