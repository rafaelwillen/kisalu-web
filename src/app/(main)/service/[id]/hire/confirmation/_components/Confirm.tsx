"use client";

import DangerButton from "@/components/buttons/DangerButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Routes } from "@/utils/constants/routes";
import { useRouter } from "next/navigation";

type Props = {
  serviceId: string;
};

export default function Confirm({ serviceId }: Props) {
  const router = useRouter();
  return (
    <div className="flex gap-4 max-w-lg mx-auto">
      <DangerButton
        onClick={() => router.replace(Routes.singleService(serviceId))}
      >
        Cancelar
      </DangerButton>
      <PrimaryButton onClick={() => {}}>Confirmar</PrimaryButton>
    </div>
  );
}
