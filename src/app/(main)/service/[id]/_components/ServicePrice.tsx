"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Routes } from "@/utils/constants/routes";
import { formatToCurrency } from "@/utils/intl";
import { useRouter } from "next/navigation";

type Props = {
  minimumPrice: number;
  serviceId: string;
};

export default function ServicePrice({ minimumPrice, serviceId }: Props) {
  const router = useRouter();

  return (
    <section className="border border-neutral-200 rounded-lg shadow-lg p-8 mt-7 max-w-xl mx-auto xl:w-1/2">
      <h2 className="font-medium text-center">Preço Mínimo do Serviço</h2>
      <p className="font-bold text-2xl text-center my-5">
        {formatToCurrency(minimumPrice * 100)}
      </p>
      <PrimaryButton
        onClick={() => router.push(Routes.serviceHiring(serviceId))}
      >
        Contratar
      </PrimaryButton>
    </section>
  );
}
