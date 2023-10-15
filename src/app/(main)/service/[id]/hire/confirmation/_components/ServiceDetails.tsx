"use client";

import { GetSingleServiceByIDResponseBody } from "@/api/types/response";
import { useServiceHireStorage } from "@/hooks/localStorage/useServiceHireStorage";
import { Routes } from "@/utils/constants/routes";
import { formatToCurrency } from "@/utils/intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  service: GetSingleServiceByIDResponseBody;
};

export default function ServiceDetails({ service }: Props) {
  const [get] = useServiceHireStorage();
  const [serviceHireData, setServiceHireData] =
    useState<ReturnType<typeof get>>(null);
  const router = useRouter();
  useEffect(() => {
    if (!get()) {
      router.replace(Routes.home);
    } else {
      setServiceHireData(get());
    }
  }, []);

  console.log(service, serviceHireData);

  return (
    <div>
      <div className="border border-neutral-200 rounded-lg shadow-lg p-8 mt-7 max-w-xl mx-auto xl:w-1/2">
        <h2 className="font-medium text-xl text-center">Preço do Serviço</h2>
        <p className="font-bold text-xl text-center my-5">
          {formatToCurrency(serviceHireData?.agreedValue! * 100)}
        </p>
        <p className="font-bold text-xl text-center my-5">
          Endereço <br />
          <span className="font-regular">{`${serviceHireData?.address.province}, ${serviceHireData?.address.county}, ${serviceHireData?.address.addressLine}`}</span>
        </p>
        <p className="font-bold text-xl text-center my-5">
          Data de Inicio
          <br />
          <span className="font-regular">
            {serviceHireData?.startDate.toLocaleDateString("pt-AO")}
          </span>
        </p>
      </div>
      <div className="border border-neutral-200 rounded-lg shadow-lg p-8 mt-7 max-w-xl mx-auto xl:w-1/2">
        <h2 className="font-medium text-center">Dados do Serviço</h2>
        <p className="font-bold text-xl my-5">
          Nome: <span className="font-regular">{service.title}</span>
        </p>
        <p className="font-bold text-xl my-5">
          Categoria:{" "}
          <span className="font-medium">{service.category.name}</span>
        </p>
        <p className="font-bold text-xl my-5">
          Descrição do serviço:{" "}
          <span className="font-medium">
            {serviceHireData?.activityDetails}
          </span>
        </p>
      </div>
    </div>
  );
}
