import PageHeader from "../../_components/PageHeader";
import BasicInformationForm from "./_components/BasicInformationForm";

export default function ServiceCreationPage() {
  return (
    <>
      <PageHeader
        pageTitle="Criar Serviço"
        pageDescription="Aqui pode transformar as suas ideias em realidade"
      />
      <section className="bg-white p-4 rounded lg:p-8">
        <h2 className="text-lg  font-medium pb-2 lg:pb-5 border-b border-b-neutral-200">
          Informações Básicas
        </h2>
        <BasicInformationForm />
      </section>
    </>
  );
}
