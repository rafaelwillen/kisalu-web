import { KisaluLogoDark } from "@/assets/images";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Input, SecureInput } from "@/components/form";
import FontLayout from "@/components/layouts/FontLayout";
import { Container } from "@/components/pages/common";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <FontLayout>
      <Container small>
        <Head>
          <title>Login Administrador | Kisalu</title>
        </Head>
        <main className="max-w-lg mx-auto flex h-screen flex-col justify-center gap-4">
          <Image
            src={KisaluLogoDark}
            alt="Kisalu Logo"
            className="self-center"
          />
          <h1 className="text-xl font-bold text-center text-neutral-800">
            Login Administrador
          </h1>
          <p className="text-center">
            Para aceder a página de administrador, insira o seu username e
            password nos referidos campos.
          </p>
          <form className="space-y-6">
            <Input label="Username" placeholder="Insira o nome do utilizador" />
            <SecureInput
              label="Password"
              placeholder="Insira a sua palavra passe"
            />
            <PrimaryButton>Login</PrimaryButton>
          </form>
          <p className="text-center text-sm text-text-100">
            Esta página é apenas para utilizadores autorizados.{" "}
            <Link
              href="/"
              className="text-primary-500 hover:underline hover:text-primary-400"
            >
              Voltar ao site
            </Link>
          </p>
        </main>
      </Container>
    </FontLayout>
  );
}
