"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecureInput from "@/components/forms/elements/SecureInput";
import {
  UserPasswordChangeFormType,
  userPasswordChangeSchema,
} from "@/utils/schemas/userPasswordChangeSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function PasswordChangeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserPasswordChangeFormType>({
    resolver: zodResolver(userPasswordChangeSchema),
  });

  function formSubmissionHandler(data: UserPasswordChangeFormType) {
    console.log(data);
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
          <PrimaryButton type="submit" fitContent>
            Alterar
          </PrimaryButton>
        </div>
      </form>
    </section>
  );
}
