"use client";

import { Routes } from "@/utils/constants/routes";
import {
  AdminLoginFormType,
  adminLoginSchema,
} from "@/utils/schemas/adminLoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import router from "next/router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import PrimaryButton from "../buttons/PrimaryButton";
import Input from "./elements/Input";
import SecureInput from "./elements/SecureInput";

export default function AdminLoginForm() {
  // TODO: Replace with NextAPI.loginAdmin API call
  const { isLoading, isError, mutateAsync, error } = useMutation(
    // NextAPI.loginAdmin
    (data: AdminLoginFormType) => {
      return new Promise((resolve) => {
        setTimeout(() => resolve({}), 2000);
      });
    }
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
    // TODO: Add the callback
    router.push(Routes.adminDashboard);
  }

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit(handleFormSubmit)}
      method="POST"
    >
      <Input
        label="Username"
        placeholder="Insira o nome do utilizador"
        errorMessage={errors.username?.message}
        {...register("username")}
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
        <p className="text-center text-danger">{(error as Error).message}</p>
      )}
    </form>
  );
}
