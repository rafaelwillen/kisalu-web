import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Input, SecureInput } from "@/components/form";
import MainLayout from "@/components/layouts/MainLayout";
import { Container } from "@/components/pages/common";
import { Routes } from "@/utils/constants/linksPaths";
import { ArrowUpRight, EnvelopeSimple } from "@phosphor-icons/react";
import Link from "next/link";
import { NextPageWithLayout } from "../_app";

const LoginPage: NextPageWithLayout = () => {
  return (
    <main className="bg-secondary-100 py-10 lg:py-32">
      <Container>
        <section className="mx-auto max-w-2xl space-y-14">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Iniciar Sessão</h1>
            <p>
              Olá! Bem-vindo de volta. Por favor, faça login para acessar a sua
              conta.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Haha, you can't login yet! :D");
            }}
            className="bg-white rounded p-12"
          >
            <Input
              required
              label="Endereço de Email"
              type="email"
              placeholder="exemplo@email.com"
              icon={<EnvelopeSimple className="text-text-200" size={20} />}
            />
            <div className="my-3" />
            <SecureInput label="Palavra Passe" required />
            <p className="my-7">
              Não possui uma conta?{" "}
              <Link
                className="animated-underline primary text-primary-600"
                href={Routes.clientRegister}
              >
                Registe-se já!
              </Link>
            </p>
            <small className="text-sm text-text-100">
              * - Campos obrigatórios
            </small>
            <PrimaryButton>
              Entrar <ArrowUpRight size={24} />
            </PrimaryButton>
          </form>
          {/* TODO: Replace with other providers: google and facebook */}
        </section>
      </Container>
    </main>
  );
};

LoginPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default LoginPage;
