import RegisterLayout from "@/components/layouts/RegisterLayout";
import { Container } from "@/components/pages/common";
import { ProviderRegisterForm } from "@/components/pages/register";
import { NextPageWithLayout } from "@/pages/_app";
import Head from "next/head";

const ProviderRegisterPage: NextPageWithLayout = () => {
  return (
    <main className="bg-accent-100 py-10">
      <Head>
        <title>Kisalu | Cadastro como Prestador</title>
      </Head>
      <Container>
        <section className="mx-auto max-w-2xl space-y-14">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Registrar</h1>
            <p>
              Comece a usar o Kisalu para começar a prestar serviços. É rápido e
              fácil.
            </p>
          </div>
          <ProviderRegisterForm />
          {/* TODO: Replace with other providers: google and facebook */}
        </section>
      </Container>
    </main>
  );
};

ProviderRegisterPage.getLayout = (page) => (
  <RegisterLayout>{page}</RegisterLayout>
);

export default ProviderRegisterPage;
