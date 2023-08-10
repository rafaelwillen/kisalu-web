"use client";

import { GetAllServicesFromProvider } from "@/api/types/response";
import Input from "@/components/forms/elements/Input";
import useServiceFilter from "@/hooks/filtering/useServiceFilter";
import { servicesStatusSelectOptions } from "@/utils/constants/selectOptions";
import classNames from "classnames";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import MobileServiceListItem from "./MobileServiceListItem";

type Props = {
  services: GetAllServicesFromProvider;
};

export default function MobileServicesList({ services }: Props) {
  const {
    emptyServices,
    filteredServices,
    searchValue,
    setSearchValue,
    status,
  } = useServiceFilter(services);

  return (
    <div className="lg:hidden">
      <div className="overflow-auto pb-4">
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
                  "px-4 pb-2 border-b",
                  status === value ? "border-black" : "border-neutral-100"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Input
        label=""
        placeholder="Pesquisar por titulo..."
        type="search"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        icon={<SearchIcon size={14} />}
      />
      {emptyServices && (
        <p className="text-center text-neutral-500 my-10">
          Não existem serviços com o estado selecionado
        </p>
      )}
      <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredServices.map((service) => (
          <MobileServiceListItem key={service.id} service={service} />
        ))}
      </ul>
    </div>
  );
}
