"use client";

import { useAuth } from "@/context/AuthContext";
import { Routes } from "@/utils/constants/routes";
import {
  AdminLoginFormType,
  adminLoginSchema,
} from "@/utils/schemas/adminLoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import PrimaryButton from "../buttons/PrimaryButton";
import Input from "./elements/Input";
import SecureInput from "./elements/SecureInput";

export default function AdminLoginForm() {
  const router = useRouter();
  const { login, isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AdminLoginFormType>({
    resolver: zodResolver(adminLoginSchema),
  });

  async function handleFormSubmit(formData: AdminLoginFormType) {
    await login({ data: formData, userType: "Administrator" });
    router.push(Routes.adminCategories);
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
    </form>
  );
}
