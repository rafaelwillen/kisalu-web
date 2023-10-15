"use client";

import DangerButton from "@/components/buttons/DangerButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import DialogContainer from "@/components/common/dialog/DialogContainer";
import DialogOverlay from "@/components/common/dialog/DialogOverlay";
import useCreateActivityMutation from "@/hooks/mutations/useCreateActivityMutation";
import useToggle from "@/hooks/useToggle";
import { Routes } from "@/utils/constants/routes";
import * as Dialog from "@radix-ui/react-dialog";
import { CheckCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Confirm() {
  const router = useRouter();

  const {  isOpen, open } = useToggle();
  const { createActivity, isLoading, cancelActivity } =
    useCreateActivityMutation({ onSuccess: () => open() });

  return (
    <div className="flex gap-4 max-w-lg mx-auto">
      <DangerButton disabled={isLoading} onClick={cancelActivity}>
        Cancelar
      </DangerButton>
      <PrimaryButton isLoading={isLoading} onClick={createActivity}>
        Confirmar
      </PrimaryButton>
      <Dialog.Root open={isOpen}>
        <Dialog.Portal>
          <DialogOverlay />
          <DialogContainer>
            <div className="text-center space-y-8">
              <CheckCircleIcon
                className="stroke-accent-500 mx-auto"
                size={70}
              />
              <h2 className="text-2xl font-bold">Pedido Confirmado</h2>
              <p className="text-lg">
                O seu pedido foi confirmado com sucesso, aguarde que o prestador
                de serviço entre em contacto consigo
              </p>
            </div>
            <div className="mt-8 mx-auto max-w-sm">
              <PrimaryButton onClick={() => router.replace(Routes.home)}>
                Ok
              </PrimaryButton>
            </div>
          </DialogContainer>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
