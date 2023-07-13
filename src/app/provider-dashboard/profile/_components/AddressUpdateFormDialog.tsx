"use client";

import { updateProviderAddress } from "@/api/provider";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Input from "@/components/forms/elements/Input";
import Select from "@/components/forms/elements/Select";
import { useAuth } from "@/context/AuthContext";
import useProvincesAndCountiesQuery from "@/hooks/query/useProvincesAndCountiesQuery";
import {
  UserAddressFormType,
  userAddressSchema,
} from "@/utils/schemas/userAddressSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { useMutation } from "@tanstack/react-query";
import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function AddressUpdateFormDialog() {
  const { token } = useAuth();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<UserAddressFormType>({
    resolver: zodResolver(userAddressSchema),
  });
  const selectedProvince = watch("province");
  const { countiesSelectOptions, provincesSelectOptions } =
    useProvincesAndCountiesQuery(selectedProvince);
  const router = useRouter();
  const { mutateAsync, isLoading } = useMutation((data: UserAddressFormType) =>
    updateProviderAddress(data, token)
  );
  const [showModal, setShowModal] = useState(true);

  async function formSubmissionHandler(data: UserAddressFormType) {
    try {
      await mutateAsync(data);
      toast.success("Endereço actualizado com sucesso.");
      setShowModal(false);
      router.refresh();
    } catch (error) {
      toast.error("Ocorreu um erro ao actualizar o endereço.");
    }
  }

  return (
    <Dialog.Root open={showModal} onOpenChange={setShowModal}>
      <Dialog.Trigger asChild>
        <button className="underline">Clique aqui para inserir.</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="z-10 bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="z-20 data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-screen w-[90vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-10 shadow-xl focus:outline-none">
          <section>
            <Dialog.Title className="text-lg  font-medium pb-2 lg:pb-5 border-b border-b-neutral-200">
              Adicionar Endereço
            </Dialog.Title>
            <form
              onSubmit={handleSubmit(formSubmissionHandler)}
              className="grid grid-cols-1 md:grid-cols-2 mt-6 lg:mt-9 gap-4"
            >
              <Controller
                control={control}
                name="province"
                render={({
                  field: { onChange, value, ...field },
                  fieldState,
                }) => (
                  <Select
                    label="Província"
                    options={provincesSelectOptions}
                    onValueSelect={onChange}
                    selectedValue={value}
                    {...field}
                    errorMessage={fieldState.error?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="county"
                render={({
                  field: { onChange, value, ...field },
                  fieldState,
                }) => (
                  <Select
                    disabled={countiesSelectOptions.length === 0}
                    label="Município"
                    options={countiesSelectOptions}
                    onValueSelect={onChange}
                    selectedValue={value}
                    {...field}
                    errorMessage={fieldState.error?.message}
                  />
                )}
              />
              <div className="col-span-full">
                <Input
                  label="Endereço"
                  errorMessage={errors.addressLine?.message}
                  {...register("addressLine")}
                />
              </div>
              <div>
                <PrimaryButton isLoading={isLoading} type="submit" fitContent>
                  Adicionar
                </PrimaryButton>
              </div>
            </form>
          </section>
          <Dialog.Close asChild>
            <button className="absolute top-4 right-4" aria-label="Close">
              <XIcon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
