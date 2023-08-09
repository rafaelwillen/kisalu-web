"use client";

import { State } from "@/api/types";
import ConfirmationDialog from "@/components/dialog/ConfirmationDialog";
import * as Popover from "@radix-ui/react-popover";
import { useMutation } from "@tanstack/react-query";
import { MoreVerticalIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

type Props = {
  serviceId: string;
  state: State;
};

type ActionName = "edit" | "delete" | "changeState";

export default function ActionPopover({ serviceId, state }: Props) {
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState(false);

  const { mutateAsync } = useMutation((action: ActionName) => {
    switch (action) {
      case "delete":
        return new Promise((resolve) => setTimeout(resolve, 1000));
      case "changeState":
        return new Promise((resolve) => setTimeout(resolve, 1000));
      default:
        throw new Error("Invalid action");
    }
  });

  const editService = () =>
    toast.promise(mutateAsync("edit"), {
      loading: "A editar serviço...",
      success: "Serviço editado com sucesso",
      error: "Ocorreu um erro ao editar o serviço",
    });
  const changeServiceState = () =>
    toast.promise(mutateAsync("changeState"), {
      loading: "A mudar o estado do serviço...",
      success: "Estado alterado com sucesso",
      error: "Ocorreu um erro ao alterar o estado",
    });
  function deleteService() {
    setOpenDeleteConfirmationModal(false);
    return toast.promise(mutateAsync("delete"), {
      loading: "A eliminar serviço...",
      success: "Serviço eliminado com sucesso",
      error: "Ocorreu um erro ao eliminar o serviço",
    });
  }

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="absolute">
          <MoreVerticalIcon />
        </button>
      </Popover.Trigger>
      <Popover.Content
        side="right"
        className="data-[state=open]:data-[side=right]:animate-slideRightAndFade"
      >
        <div className="p-2 bg-white shadow-xl">
          <ul className="text-sm">
            <li>
              <button
                type="button"
                onClick={changeServiceState}
                className="w-full text-left px-4 py-2 hover:bg-accent-200 rounded-md"
              >
                {state === "Available" ? "Não publicar" : "Publicar"}
              </button>
            </li>
            {state === "Draft" && (
              <li>
                <button
                  type="button"
                  onClick={editService}
                  className="w-full text-left px-4 py-2 hover:bg-accent-200 rounded-md"
                >
                  Editar
                </button>
              </li>
            )}
            <li>
              <button
                type="button"
                onClick={() => setOpenDeleteConfirmationModal(true)}
                className="w-full text-left px-4 py-2 hover:bg-danger/50  rounded-md"
              >
                Eliminar
              </button>
            </li>
          </ul>
        </div>
        <Popover.Arrow fill="white" />
        <ConfirmationDialog
          onCancel={() => setOpenDeleteConfirmationModal(false)}
          onConfirm={deleteService}
          open={openDeleteConfirmationModal}
          title="Eliminar serviço"
          description="Tem a certeza que pretende eliminar este serviço? Esta ação é irreversível."
          dangerousAction
          confirmButtonTitle="Eliminar"
        />
      </Popover.Content>
    </Popover.Root>
  );
}
