import MainLayout from "@/components/layouts/MainLayout";
import { ClientRegisterForm } from "@/components/pages/ClientRegister";
import { Container } from "@/components/pages/common";
import { NextPageWithLayout } from "@/pages/_app";
import Head from "next/head";

const ClientRegisterPage: NextPageWithLayout = () => {
  return (
    <main className="bg-secondary-100 py-10 lg:py-32">
      <Head>
        <title>Kisalu | Cadastro como Cliente</title>
      </Head>
      <Container>
        <section className="mx-auto max-w-2xl space-y-14">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Registrar</h1>
            <p>
              Comece a usar o Kisalu para requisitar os serviços agora mesmo. É
              rápido e fácil.
            </p>
          </div>
          <ClientRegisterForm />
          {/* TODO: Replace with other providers: google and facebook */}
        </section>
      </Container>
    </main>
  );
};

ClientRegisterPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ClientRegisterPage;
