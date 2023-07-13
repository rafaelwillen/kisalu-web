"use client";

import { GetAllServicesFromProvider } from "@/api/types/response";
import Select from "@/components/forms/elements/Select";
import { servicesStatusSelectOptions } from "@/utils/constants/selectOptions";
import { useMemo, useState } from "react";

type Props = {
  services: GetAllServicesFromProvider;
};

export default function MobileServicesList({ services }: Props) {
  const [selectedValue, setSelectedValue] = useState(
    servicesStatusSelectOptions[0].value
  );

  const filteredServices = useMemo(
    () => services.filter(({ state }) => state === selectedValue),
    [services, selectedValue]
  );
  const emptyServices = filteredServices.length === 0;

  return (
    <div className="lg:hidden">
      <Select
        label="Estado do Serviço"
        onValueSelect={setSelectedValue}
        selectedValue={selectedValue}
        options={servicesStatusSelectOptions}
      />
      {emptyServices && (
        <p className="text-center text-neutral-500 my-10">
          Não existem serviços com o estado selecionado
        </p>
      )}
      <div></div>
    </div>
  );
}
