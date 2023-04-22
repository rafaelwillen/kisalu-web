import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Input, SecureInput } from "@/components/form";
import MainLayout from "@/components/layouts/MainLayout";
import { Container } from "@/components/pages/common";
import { NextPageWithLayout } from "@/pages/_app";
import { Routes } from "@/utils/constants/linksPaths";
import { ArrowUpRight, EnvelopeSimple, Phone } from "@phosphor-icons/react";
import Link from "next/link";

const ClientRegisterPage: NextPageWithLayout = () => {
  return (
    <main className="bg-secondary-100 py-10 lg:py-32">
      <Container>
        <section className="mx-auto max-w-2xl space-y-14">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Registrar</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
              explicabo.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Haha, you can't create an account yet! :D");
            }}
            className="bg-white rounded p-12"
          >
            <p className="text-center text-sm mb-4 md:text-left md:text-base">
              Crie uma conta como <strong>cliente</strong> para começar a
              requisitar serviços.
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Input required label="Primeiro Nome" />
                <Input required label="Último Nome" />
              </div>
              <Input
                type="tel"
                required
                label="Número de Telefone"
                placeholder="+244 999 999 999"
                icon={<Phone className="text-text-200" size={20} />}
              />
              <Input
                required
                label="Endereço de Email"
                type="email"
                placeholder="exemplo@email.com"
                icon={<EnvelopeSimple className="text-text-200" size={20} />}
              />
              <div className="my-3" />
              <SecureInput label="Palavra Passe" required />
              <SecureInput label="Confirmar Palavra Passe" required />
            </div>
            <p className="my-7">
              Já possui uma conta?{" "}
              <Link
                className="animated-underline primary text-primary-600"
                href={Routes.clientRegister}
              >
                Faça o login.
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

ClientRegisterPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ClientRegisterPage;
