import NextAPI from "@/api/next";
import { KisaluLogoDark } from "@/assets/images";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Input, SecureInput } from "@/components/form";
import FontLayout from "@/components/layouts/FontLayout";
import { Container } from "@/components/pages/common";
import { Routes } from "@/utils/constants/routes";
import {
  AdminLoginFormType,
  adminLoginSchema,
} from "@/utils/schemas/adminLoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { NextPageWithLayout } from "../_app";

const AdminLoginPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { isLoading, isError, mutateAsync, error } = useMutation(
    NextAPI.loginAdmin
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
    <Container small>
      <Head>
        <title>Login Administrador | Kisalu</title>
      </Head>
      <main className="max-w-lg mx-auto flex h-screen flex-col justify-center gap-4">
        <Image src={KisaluLogoDark} alt="Kisalu Logo" className="self-center" />
        <h1 className="text-xl font-bold text-center text-neutral-800">
          Login Administrador
        </h1>
        <p className="text-center">
          Para aceder a página de administrador, insira o seu username e
          password nos referidos campos.
        </p>
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
          <PrimaryButton
            disabled={!isValid}
            isLoading={isLoading}
            type="submit"
          >
            Login
          </PrimaryButton>
          {isError && (
            <p className="text-center text-danger">
              {(error as Error).message}
            </p>
          )}
        </form>
        <p className="text-center text-sm text-text-100">
          Esta página é apenas para utilizadores autorizados.{" "}
          <Link
            href={Routes.home}
            className="text-primary-500 hover:underline hover:text-primary-400"
          >
            Voltar ao site
          </Link>
        </p>
      </main>
    </Container>
  );
};

AdminLoginPage.getLayout = (page) => <FontLayout>{page}</FontLayout>;

export default AdminLoginPage;
