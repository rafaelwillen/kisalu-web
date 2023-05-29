import Container from "@/components/common/Container";
import LoginForm from "@/components/forms/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar Sessão",
};

export default function LoginPage() {
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
        </section>
      </Container>
    </main>
  );
}
