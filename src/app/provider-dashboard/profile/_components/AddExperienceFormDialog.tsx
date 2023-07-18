"use client";

import { ExperienceType, createExperience } from "@/api/experienceInfo";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import DialogClose from "@/components/common/dialog/DialogClose";
import DialogContainer from "@/components/common/dialog/DialogContainer";
import DialogOverlay from "@/components/common/dialog/DialogOverlay";
import DialogTitle from "@/components/common/dialog/DialogTitle";
import DatePicker from "@/components/forms/elements/DatePicker";
import Input from "@/components/forms/elements/Input";
import TextArea from "@/components/forms/elements/TextArea";
import { useAuth } from "@/context/AuthContext";
import {
  ProviderExperienceFormType,
  providerExperienceSchema,
} from "@/utils/schemas/providerExperienceSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { useMutation } from "@tanstack/react-query";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

type Props = {
  experienceType: ExperienceType;
};

export default function AddExperienceFormDialog({ experienceType }: Props) {
  const { token } = useAuth();
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProviderExperienceFormType>({
    resolver: zodResolver(providerExperienceSchema),
    defaultValues: { type: experienceType },
  });
  const { mutateAsync, isLoading } = useMutation(
    (data: ProviderExperienceFormType) => createExperience(data, token),
    {
      onSuccess: () => toast.success("Experiência adicionada com sucesso!"),
      onError: (error) => {
        if (error instanceof Error) toast.error(error.message);
      },
    }
  );

  async function formSubmissionHandler(data: ProviderExperienceFormType) {
    await mutateAsync(data);
    setOpenDialog(false);
    router.refresh();
  }

  return (
    <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
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
          <DialogTitle
            title={`Adicionar experiência ${
              experienceType === "Education" ? "académica" : "profissional"
            }`}
          />
          <form
            noValidate
            onSubmit={handleSubmit(formSubmissionHandler, (error) =>
              console.log(error)
            )}
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
              <PrimaryButton fitContent isLoading={isLoading}>
                Adicionar
              </PrimaryButton>
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
