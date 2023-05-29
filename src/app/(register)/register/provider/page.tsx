import Container from "@/components/common/Container";
import ProviderRegisterForm from "@/components/forms/ProviderRegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadastro como Prestador",
};

export default function page() {
  return (
    <main className="bg-accent-100 py-10">
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
}
