"use client";

import { GetAllServicesFromProvider } from "@/api/types/response";
import { NoServiceBanner } from "@/assets/images";
import ConfirmationDialog from "@/components/dialog/ConfirmationDialog";
import { truncateLongText } from "@/utils";
import { servicesStatusSelectOptions } from "@/utils/constants/selectOptions";
import { formatToCurrency } from "@/utils/intl";
import classNames from "classnames";
import { EditIcon, GlobeIcon, PencilIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

type Props = {
  services: GetAllServicesFromProvider;
};

export default function DesktopServicesList({ services }: Props) {
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState(false);

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
            <div
              key={service.id}
              className="grid text-center grid-cols-6 gap-2 items-center border-b border-neutral-200 pl-7 py-5"
            >
              <div className="col-span-3 text-left flex gap-4 items-start">
                <Image
                  src={service.bannerImageURL ?? NoServiceBanner}
                  width={122}
                  height={90}
                  alt={service.title}
                  className="w-auto h-24 rounded-sm object-fill"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{service.title}</h3>
                  <p>{truncateLongText(service.description)}</p>
                </div>
              </div>
              <p>{service.category}</p>
              <p>
                {formatToCurrency(service.minimumPrice)} em{" "}
                {service.deliveryTime}
              </p>
              <div className="flex gap-2 justify-center items-center flex-wrap">
                <button
                  className="p-3 bg-accent-200 hover:bg-accent-300 rounded-md duration-300"
                  title={
                    service.state === "Available" ? "Não publicar" : "Publicar"
                  }
                >
                  {service.state === "Available" ? (
                    <PencilIcon size={16} />
                  ) : (
                    <GlobeIcon size={16} />
                  )}
                </button>
                {service.state === "Draft" && (
                  <button
                    className="p-3 bg-accent-200 hover:bg-accent-300 rounded-md duration-300"
                    title="Editar serviço"
                  >
                    <EditIcon size={16} />
                  </button>
                )}
                <button
                  onClick={() => setOpenDeleteConfirmationModal(true)}
                  className="p-3 bg-danger hover:bg-danger/60 text-white rounded-md duration-300"
                  title="Apagar serviço"
                >
                  <TrashIcon size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <ConfirmationDialog
        onCancel={() => setOpenDeleteConfirmationModal(false)}
        onConfirm={() => {}}
        open={openDeleteConfirmationModal}
        title="Eliminar serviço"
        description="Tem a certeza que pretende eliminar este serviço? Esta ação é irreversível."
        dangerousAction
        confirmButtonTitle="Eliminar"
      />
    </div>
  );
}
