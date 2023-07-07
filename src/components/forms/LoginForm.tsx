"use client";

import { authenticateUserNextServer } from "@/api/authentication";
import { Routes } from "@/utils/constants/routes";
import { LoginFormType, loginSchema } from "@/utils/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
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
  const { mutateAsync, isLoading } = useMutation(
    (data: LoginFormType) => authenticateUserNextServer(data),
    {
      onError: (error) => {
        if (error instanceof Error) toast.error(error.message);
      },
    }
  );
  const router = useRouter();

  async function handleFormSubmission(data: LoginFormType) {
    await mutateAsync(data);
    toast.success("Sessão iniciada com sucesso");
    router.replace(Routes.home);
    router.refresh();
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
