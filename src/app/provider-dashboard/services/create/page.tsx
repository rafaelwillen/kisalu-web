import ServiceForm from "@/components/forms/ServiceForm";
import PageHeader from "../../_components/PageHeader";

export default function ServiceCreationPage() {
  return (
    <>
      <PageHeader
        pageTitle="Criar Serviço"
        pageDescription="Aqui pode transformar as suas ideias em realidade"
      />
      <section className="bg-white p-4 rounded lg:p-8">
        <ServiceForm />
      </section>
    </>
  );
}