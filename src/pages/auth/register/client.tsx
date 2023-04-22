import MainLayout from "@/components/layouts/MainLayout";
import { ClientRegisterForm } from "@/components/pages/ClientRegister";
import { Container } from "@/components/pages/common";
import { NextPageWithLayout } from "@/pages/_app";

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
          <ClientRegisterForm />
          {/* TODO: Replace with other providers: google and facebook */}
        </section>
      </Container>
    </main>
  );
};

ClientRegisterPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ClientRegisterPage;
