import MainLayout from "@/components/layouts/MainLayout";
import { Container } from "@/components/pages/common";
import { LoginForm } from "@/components/pages/login";
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
          <LoginForm />
          {/* TODO: Replace with other providers: google and facebook */}
        </section>
      </Container>
    </main>
  );
};

LoginPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default LoginPage;
