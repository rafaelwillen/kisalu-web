"use client";

import { authenticateAdministratorNextServer } from "@/api/authentication";
import { Routes } from "@/utils/constants/routes";
import {
  AdminLoginFormType,
  adminLoginSchema,
} from "@/utils/schemas/adminLoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import PrimaryButton from "../buttons/PrimaryButton";
import Input from "./elements/Input";
import SecureInput from "./elements/SecureInput";

export default function AdminLoginForm() {
  const router = useRouter();
  const { isLoading, isError, mutateAsync, error } = useMutation(
    (formData: AdminLoginFormType) =>
      authenticateAdministratorNextServer(formData)
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AdminLoginFormType>({
    resolver: zodResolver(adminLoginSchema),
  });

  async function handleFormSubmit(formData: AdminLoginFormType) {
    await mutateAsync(formData);
    toast.success("Login efetuado com sucesso!");
    router.push(Routes.adminDashboard);
  }

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit(handleFormSubmit)}
      method="POST"
    >
      <Input
        label="Email"
        type="email"
        placeholder="Insira o email do utilizador"
        errorMessage={errors.email?.message}
        {...register("email")}
      />
      <SecureInput
        {...register("password")}
        errorMessage={errors.password?.message}
        label="Password"
        placeholder="Insira a sua palavra passe"
      />
      <PrimaryButton disabled={!isValid} isLoading={isLoading} type="submit">
        Login
      </PrimaryButton>
      {isError && (
        <p className="text-center text-danger capitalize">
          {(error as Error).message}
        </p>
      )}
    </form>
  );
}
