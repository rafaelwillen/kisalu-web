import Container from "@/components/common/Container";
import UserRegisterForm from "@/components/forms/UserRegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadastro como Cliente",
};

export default function ClientRegisterPage() {
  return (
    <main className="bg-secondary-100 py-10">
      <Container>
        <section className="mx-auto max-w-2xl space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Registrar</h1>
            <p>
              Comece a usar o Kisalu para requisitar os serviços agora mesmo. É
              rápido e fácil.
            </p>
          </div>
          <UserRegisterForm userType="client" />
          {/* TODO: Replace with other providers: google and facebook */}
        </section>
      </Container>
    </main>
  );
}
