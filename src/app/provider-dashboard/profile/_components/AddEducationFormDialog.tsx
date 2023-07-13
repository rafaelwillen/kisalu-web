"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import DialogClose from "@/components/common/dialog/DialogClose";
import DialogContainer from "@/components/common/dialog/DialogContainer";
import DialogOverlay from "@/components/common/dialog/DialogOverlay";
import DialogTitle from "@/components/common/dialog/DialogTitle";
import DatePicker from "@/components/forms/elements/DatePicker";
import Input from "@/components/forms/elements/Input";
import TextArea from "@/components/forms/elements/TextArea";
import {
  ProviderExperienceFormType,
  providerExperienceSchema,
} from "@/utils/schemas/providerExperienceSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { PlusIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

export default function AddEducationFormDialog() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProviderExperienceFormType>({
    resolver: zodResolver(providerExperienceSchema),
  });

  function formSubmissionHandler(data: ProviderExperienceFormType) {
    console.log(data);
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex gap-2 items-center text-accent-400 max-sm:text-sm">
          <PlusIcon
            size={28}
            className="p-2 rounded-full bg-accent-400 text-white"
          />
          Adicionar
        </button>
      </Dialog.Trigger>
      <Dialog.DialogPortal>
        <DialogOverlay />
        <DialogContainer>
          <DialogTitle title="Adicionar informação sobre educação" />
          <form
            noValidate
            onSubmit={handleSubmit(formSubmissionHandler)}
            className="grid grid-cols-1 md:grid-cols-2 mt-6 lg:mt-9 gap-4"
          >
            <Input
              required
              label="Título"
              {...register("title")}
              errorMessage={errors.title?.message}
            />
            <Input
              required
              label="Nome da Instituição"
              {...register("institutionName")}
              errorMessage={errors.institutionName?.message}
            />
            <Controller
              control={control}
              name="startDate"
              render={({
                field: { onChange, value, ...field },
                fieldState,
              }) => (
                <DatePicker
                  required
                  label="Data de Início"
                  onDateChange={onChange}
                  selectedDate={value}
                  errorMessage={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="endDate"
              render={({
                field: { onChange, value, ...field },
                fieldState,
              }) => (
                <DatePicker
                  label="Data de Fim"
                  onDateChange={onChange}
                  selectedDate={value}
                  errorMessage={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <div className="col-span-full">
              <TextArea
                required
                label="Descrição"
                {...register("description")}
                errorMessage={errors.description?.message}
              />
            </div>
            <div className="col-start-1 space-y-2">
              <PrimaryButton fitContent>Adicionar</PrimaryButton>
              <p>Deixar a data de fim vazia caso esteja em progresso.</p>
              <p className="text-text-100 text-sm">
                <span className="text-accent-400">*</span> Campos obrigatórios
              </p>
            </div>
          </form>
          <DialogClose />
        </DialogContainer>
      </Dialog.DialogPortal>
    </Dialog.Root>
  );
}
