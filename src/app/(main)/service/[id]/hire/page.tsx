import { getServiceById } from "@/api/services";
import Container from "@/components/common/Container";
import ActivityHireForm from "@/components/forms/ActivityHireForm";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function ServiceHiringPage({ params }: PageProps) {
  const { id: serviceId } = params;
  const service = await getServiceById(serviceId);
  if (!service) notFound();

  return (
    <Container small>
      <main className="my-8 space-y-4">
        <h1 className="text-center text-2xl">Contratação do Serviço</h1>
        <ActivityHireForm
          serviceId={serviceId}
          minimumPrice={service.minimumPrice}
        />
      </main>
    </Container>
  );
}
