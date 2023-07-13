"use client";

import { updateProviderAddress } from "@/api/provider";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import DialogClose from "@/components/common/dialog/DialogClose";
import DialogContainer from "@/components/common/dialog/DialogContainer";
import DialogOverlay from "@/components/common/dialog/DialogOverlay";
import DialogTitle from "@/components/common/dialog/DialogTitle";
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
        <DialogOverlay />
        <DialogContainer>
          <section>
            <DialogTitle title="Adicionar Endereço" />
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
          <DialogClose />
        </DialogContainer>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
