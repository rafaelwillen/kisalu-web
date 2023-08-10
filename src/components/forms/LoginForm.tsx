"use client";

import { useAuth } from "@/context/AuthContext";
import { Routes } from "@/utils/constants/routes";
import { LoginFormType, loginSchema } from "@/utils/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import PrimaryButton from "../buttons/PrimaryButton";
import Input from "./elements/Input";
import SecureInput from "./elements/SecureInput";

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });
  const { login, isLoading } = useAuth();
  const router = useRouter();

  async function handleFormSubmission(data: LoginFormType) {
    login({
      data,
      userType: "User",
    });
    toast.success("Sessão iniciada com sucesso");
    router.replace(Routes.home);
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmission, console.log)}
      className="bg-white rounded p-12"
      noValidate
    >
      <Input
        required
        label="Endereço de Email"
        type="email"
        placeholder="exemplo@email.com"
        icon={<Mail className="text-text-200" size={20} />}
        {...register("email")}
        errorMessage={errors.email?.message}
      />
      <div className="my-3" />
      <SecureInput
        label="Palavra Passe"
        required
        {...register("password")}
        errorMessage={errors.password?.message}
      />
      <p className="my-7">
        Não possui uma conta?{" "}
        <Link
          className="animated-underline primary text-primary-600"
          href={Routes.register}
        >
          Registe-se já!
        </Link>
      </p>
      <small className="text-sm text-text-100">* - Campos obrigatórios</small>
      <PrimaryButton isLoading={isLoading}>
        Entrar <ArrowUpRight size={24} />
      </PrimaryButton>
    </form>
  );
}
