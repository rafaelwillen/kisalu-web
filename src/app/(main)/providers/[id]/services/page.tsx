import { getProviderById } from "@/api/provider";
import Container from "@/components/common/Container";
import ServiceCard from "@/components/common/ServiceCard";
import { Routes } from "@/utils/constants/routes";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function ProviderServicesPage({
  params: { id: providerId },
}: PageProps) {
  const provider = await getProviderById(providerId);
  if (!provider) notFound();

  const { services, firstName, lastName, id, avatarImageURL } = provider;

  return (
    <main className="pb-10 pt-10 lg:pt-0">
      <Container small>
        <section className="space-x-2 my-5 hidden lg:block text-text-200/60">
          <Link
            className="animated-underline flex gap-1 items-center hover:underline  "
            href={Routes.singleProvider(id)}
          >
            <ArrowLeft /> Voltar
          </Link>
        </section>
      </Container>
      <Container small>
        <p className="text-xl">Serviços Disponíveis</p>
        <hr className="text-neutral-200 mt-4" />
        {services.length !== 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-5 lg:gap-7 mt-5 mb-7">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                {...service}
                User={{ avatarImageURL, firstName, lastName }}
              />
            ))}
          </section>
        ) : (
          <p className="my-56 text-center text-2xl">
            Este prestador não possui serviços disponíveis
          </p>
        )}
      </Container>
    </main>
  );
}
