import { getAllProviders } from "@/api/provider";
import Container from "@/components/common/Container";
import { Metadata } from "next";
import ProviderCard from "./_components/ProviderCard";

export const metadata: Metadata = {
  title: "Os Nossos Prestadores",
};

export default async function ProvidersPage() {
  const providers = await getAllProviders();

  return (
    <main className="py-10 lg:py-32">
      <Container small>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-5 lg:gap-7 mt-5 mb-7">
          {providers.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </section>
      </Container>
    </main>
  );
}
