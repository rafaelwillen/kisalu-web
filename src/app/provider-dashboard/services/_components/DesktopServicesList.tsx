"use client";

import { GetAllServicesFromProvider } from "@/api/types/response";
import Input from "@/components/forms/elements/Input";
import { servicesStatusSelectOptions } from "@/utils/constants/selectOptions";
import classNames from "classnames";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import DesktopServiceListItem from "./DesktopServiceListItem";

type Props = {
  services: GetAllServicesFromProvider;
};

export default function DesktopServicesList({ services }: Props) {
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

  const isEmpty = filteredServices.length === 0;

  return (
    <div className="max-lg:hidden">
      <Input
        label=""
        type="search"
        placeholder="Pesquisar por titulo..."
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        icon={<SearchIcon size={14} />}
      />
      <div className="mt-4">
        <ul className="flex">
          {servicesStatusSelectOptions.map(({ label, value }) => (
            <li key={value}>
              <Link
                href={{
                  query: {
                    status: value,
                  },
                }}
                className={classNames(
                  "px-4 pb-2 border-b block",
                  status === value ? "border-black" : "border-neutral-100"
                )}
              >
                {label}
              </Link>
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
