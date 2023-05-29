import Container from "@/components/common/Container";
import ClientRegisterForm from "@/components/forms/ClientRegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadastro como Cliente",
};

export default function ClientRegisterPage() {
  return (
    <main className="bg-secondary-100 py-10">
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
}
