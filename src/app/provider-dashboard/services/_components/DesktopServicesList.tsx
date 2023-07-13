"use client";

import { GetAllServicesFromProvider } from "@/api/types/response";
import { servicesStatusSelectOptions } from "@/utils/constants/selectOptions";
import classNames from "classnames";
import { useMemo, useState } from "react";

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
      <table className="w-full table-auto mt-8">
        <thead>
          <tr className="bg-secondary-50 rounded font-medium text-lg">
            <th className="text-left pl-8 py-5">Detalhes</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {isEmpty ? (
            <tr>
              <td colSpan={3} className="text-center py-8">
                Não existem serviços com este estado
              </td>
            </tr>
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
