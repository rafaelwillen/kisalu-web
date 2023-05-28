import { KisaluLogoDark } from "@/assets/images";
import Container from "@/components/common/Container";
import AdminLoginForm from "@/components/forms/AdminLoginForm";
import { Routes } from "@/utils/constants/routes";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login Administrador",
};

export default function AdminLoginPage() {
  return (
    <Container small>
      <main className="max-w-lg mx-auto flex h-screen flex-col justify-center gap-4">
        <Image src={KisaluLogoDark} alt="Kisalu Logo" className="self-center" />
        <h1 className="text-xl font-bold text-center text-neutral-800">
          Login Administrador
        </h1>
        <p className="text-center">
          Para aceder a página de administrador, insira o seu username e
          password nos referidos campos.
        </p>
        <AdminLoginForm />
        <p className="text-center text-sm text-text-100">
          Esta página é apenas para utilizadores autorizados.{" "}
          <Link
            href={Routes.home}
            className="text-primary-500 hover:underline hover:text-primary-400"
          >
            Voltar na página inicial
          </Link>
        </p>
      </main>
    </Container>
  );
}
