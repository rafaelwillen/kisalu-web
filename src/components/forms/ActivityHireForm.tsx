"use client";

import { useServiceHireStorage } from "@/hooks/localStorage/useServiceHireStorage";
import useProvincesAndCountiesQuery from "@/hooks/query/useProvincesAndCountiesQuery";
import { Routes } from "@/utils/constants/routes";
import {
  ServiceHireFormType,
  serviceHireSchema,
} from "@/utils/schemas/serviceHireSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import DangerButton from "../buttons/DangerButton";
import PrimaryButton from "../buttons/PrimaryButton";
import DatePicker from "./elements/DatePicker";
import Input from "./elements/Input";
import NumberInput from "./elements/NumberInput";
import Select from "./elements/Select";
import TextArea from "./elements/TextArea";

type Props = {
  serviceId: string;
  minimumPrice: number;
};

export default function ActivityHireForm({ serviceId, minimumPrice }: Props) {
  const router = useRouter();
  const [, setStorageData] = useServiceHireStorage();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ServiceHireFormType>({
    resolver: zodResolver(serviceHireSchema),
    defaultValues: {
      agreedValue: minimumPrice,
    },
  });
  const province = watch("address.province");
  const { countiesSelectOptions, provincesSelectOptions } =
    useProvincesAndCountiesQuery(province);

  function handleFormSubmit(data: ServiceHireFormType) {
    setStorageData(data);
    router.push(Routes.serviceHiringConfirmation(serviceId));
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit, console.error)}
      className="grid grid-cols-2 gap-6 p-4 rounded shadow-xl border border-neutral-200"
    >
      <Controller
        control={control}
        name="agreedValue"
        defaultValue={minimumPrice}
        render={({ field, fieldState: { error } }) => (
          <NumberInput
            {...field}
            errorMessage={error?.message}
            label="Orçamento a pagar"
          />
        )}
      />
      <Controller
        control={control}
        name="startDate"
        defaultValue={new Date()}
        render={({
          field: { onChange, value, ...field },
          fieldState: { error },
        }) => (
          <DatePicker
            label="Data de Realização do Serviço"
            onDateChange={onChange}
            selectedDate={value}
            errorMessage={error?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address.province"
        render={({
          field: { onChange, value, ...field },
          fieldState: { error },
        }) => (
          <Select
            onValueSelect={onChange}
            selectedValue={value}
            label="Província"
            options={provincesSelectOptions}
            {...field}
            errorMessage={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="address.county"
        render={({
          field: { onChange, value, ...field },
          fieldState: { error },
        }) => (
          <Select
            onValueSelect={onChange}
            selectedValue={value}
            label="Município"
            options={countiesSelectOptions}
            {...field}
            errorMessage={error?.message}
            disabled={countiesSelectOptions.length === 0}
          />
        )}
      />
      <div className="col-span-full">
        <Input
          label="Endereço"
          errorMessage={errors.address?.addressLine?.message}
          {...register("address.addressLine")}
        />
      </div>
      <div className="col-span-full">
        <TextArea
          errorMessage={errors.activityDetails?.message}
          label="Informação Adicional"
          {...register("activityDetails")}
        />
      </div>
      <div className="col-span-full flex justify-end gap-4">
        <DangerButton
          onClick={() => router.replace(Routes.singleService(serviceId))}
          fitContent
          variant="outline"
        >
          Cancelar
        </DangerButton>
        <PrimaryButton fitContent>Avançar</PrimaryButton>
      </div>
    </form>
  );
}
