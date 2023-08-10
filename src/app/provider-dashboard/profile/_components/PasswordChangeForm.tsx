"use client";

import { resetUserPassword } from "@/api/authentication";
import { UserPasswordResetRequestBody } from "@/api/types/request";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecureInput from "@/components/forms/elements/SecureInput";
import { useAuth } from "@/context/AuthContext";
import {
  UserPasswordChangeFormType,
  userPasswordChangeSchema,
} from "@/utils/schemas/userPasswordChangeSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function PasswordChangeForm() {
  const { token } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserPasswordChangeFormType>({
    resolver: zodResolver(userPasswordChangeSchema),
  });
  const { isLoading, mutateAsync } = useMutation(
    (data: UserPasswordResetRequestBody) => resetUserPassword(data, token),
    {
      onError: (error) => {
      if (error instanceof Error) toast.error(error.message, {duration: 5000, position: "bottom-left"});
      },
      onSuccess: () => {
        toast.success("Password alterada com sucesso",  {duration: 5000, position: "bottom-left"});
        reset();
      },
    }
  );

  async function formSubmissionHandler({
    newPassword,
    oldPassword,
  }: UserPasswordChangeFormType) {
    await mutateAsync({ newPassword, oldPassword });
  }

  return (
    <section className="mt-14 bg-white p-4 rounded lg:p-8">
      <h2 className="text-lg  font-medium pb-2 lg:pb-5 border-b border-b-neutral-200">
        Mudar a Password
      </h2>
      <form
        onSubmit={handleSubmit(formSubmissionHandler)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 lg:mt-9"
      >
        <div className="space-y-2">
          <SecureInput
            label="Password antiga"
            errorMessage={errors.oldPassword?.message}
            {...register("oldPassword")}
          />
          <SecureInput
            label="Nova Password"
            errorMessage={errors.newPassword?.message}
            {...register("newPassword")}
          />
          <SecureInput
            label="Confirmar Password"
            errorMessage={errors.newPasswordConfirmation?.message}
            {...register("newPasswordConfirmation")}
          />
          <PrimaryButton type="submit" fitContent isLoading={isLoading}>
            Alterar
          </PrimaryButton>
        </div>
      </form>
    </section>
  );
}
