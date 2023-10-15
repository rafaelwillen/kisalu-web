import { getProviderById } from "@/api/provider";
import { getServiceById } from "@/api/services";
import Container from "@/components/common/Container";
import { ArrowLeftRightIcon } from "lucide-react";
import { notFound } from "next/navigation";
import ClientDetails from "./_components/ClientDetails";
import Confirm from "./_components/Confirm";
import ProviderDetails from "./_components/ProviderDetails";
import ServiceDetails from "./_components/ServiceDetails";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function ServiceHireConfirmationPage({
  params: { id: serviceId },
}: PageProps) {
  const service = await getServiceById(serviceId);
  if (!service) notFound();
  const provider = await getProviderById(service.User.id);
  if (!provider) notFound();
  return (
    <Container small>
      <main className="my-8 space-y-4">
        <h1 className="text-center text-2xl">Confirmar Contratação</h1>
        <p className="text-center text-lg">
          Confirme os dados da contratação do serviço
        </p>
        <div className="flex gap-12 justify-center">
          <ClientDetails />
          <ArrowLeftRightIcon size={60} className="self-center" />
          <ProviderDetails provider={provider} />
        </div>
        <ServiceDetails service={service} />
        <Confirm />
      </main>
    </Container>
  );
}
