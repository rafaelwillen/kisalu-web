import { BaseServiceType } from "@/api/types";
import { NoServiceBanner } from "@/assets/images";
import ConfirmationDialog from "@/components/dialog/ConfirmationDialog";
import useServiceActionsMutation from "@/hooks/mutations/useServiceActionsMutation";
import { truncateLongText } from "@/utils";
import { formatToCurrency } from "@/utils/intl";
import { EditIcon, GlobeIcon, PencilIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Props = {
  service: BaseServiceType;
};

export default function DesktopServiceListItem({ service }: Props) {
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState(false);
  const { changeServiceState, deleteService, editService } =
    useServiceActionsMutation(service.id);
  return (
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
        {formatToCurrency(service.minimumPrice)} em {service.deliveryTime}
      </p>
      <div className="flex gap-2 justify-center items-center flex-wrap">
        <button
          onClick={changeServiceState}
          type="button"
          className="p-3 bg-accent-200 hover:bg-accent-300 rounded-md duration-300"
          title={service.state === "Available" ? "Não publicar" : "Publicar"}
        >
          {service.state === "Available" ? (
            <PencilIcon size={16} />
          ) : (
            <GlobeIcon size={16} />
          )}
        </button>
        {service.state === "Draft" && (
          <button
            onClick={editService}
            type="button"
            className="p-3 bg-accent-200 hover:bg-accent-300 rounded-md duration-300"
            title="Editar serviço"
          >
            <EditIcon size={16} />
          </button>
        )}
        <button
          type="button"
          onClick={() => setOpenDeleteConfirmationModal(true)}
          className="p-3 bg-danger hover:bg-danger/60 text-white rounded-md duration-300"
          title="Apagar serviço"
        >
          <TrashIcon size={16} />
        </button>
      </div>
      <ConfirmationDialog
        onCancel={() => setOpenDeleteConfirmationModal(false)}
        onConfirm={() => {
          setOpenDeleteConfirmationModal(false);
          deleteService();
        }}
        open={openDeleteConfirmationModal}
        title="Eliminar serviço"
        description="Tem a certeza que pretende eliminar este serviço? Esta ação é irreversível."
        dangerousAction
        confirmButtonTitle="Eliminar"
      />
    </div>
  );
}
