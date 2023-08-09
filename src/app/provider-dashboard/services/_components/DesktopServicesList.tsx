"use client";

import { GetAllServicesFromProvider } from "@/api/types/response";
import { servicesStatusSelectOptions } from "@/utils/constants/selectOptions";
import classNames from "classnames";
import { useMemo, useState } from "react";
import DesktopServiceListItem from "./DesktopServiceListItem";

type Props = {
  services: GetAllServicesFromProvider;
};

export default function DesktopServicesList({ services }: Props) {


  const [selectedStatus, setSelectedStatus] = useState(
    servicesStatusSelectOptions[0].value
  );

  const filteredServices = useMemo(
    () => services.filter(({ state }) => state === selectedStatus),
    [services, selectedStatus]
  );

  const isEmpty = filteredServices.length === 0;

  return (
    <div className="max-lg:hidden">
      <div>
        <ul className="flex">
          {servicesStatusSelectOptions.map(({ label, value }) => (
            <li key={value}>
              <button
                onClick={() => setSelectedStatus(value)}
                className={classNames(
                  "px-4 pb-2 border-b",
                  selectedStatus === value
                    ? "border-black"
                    : "border-neutral-100"
                )}
              >
                {label}
              </button>
            </li>
          ))}
          <li className="px-4 pb-2 border-b border-neutral-100 flex-1"></li>
        </ul>
      </div>
      <div>
        <div className="pl-8 py-5 text-center grid grid-cols-6 gap-2 bg-accent-50 rounded font-medium text-lg">
          <p className="col-span-3 text-left">Detalhes</p>
          <p>Categoria</p>
          <p>Custo / Entrega</p>
          <p>Acções</p>
        </div>
        {isEmpty ? (
          <p className="text-center py-8">
            Não existem serviços com este estado
          </p>
        ) : (
          filteredServices.map((service) => (
            <DesktopServiceListItem service={service} key={service.id} />
          ))
        )}
      </div>
    </div>
  );
}
