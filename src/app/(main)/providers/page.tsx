import Container from "@/components/common/Container";
import ProviderCard from "@/components/pages/Provider/ProviderCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Os Nossos Prestadores",
};

export default function ProvidersPage() {
  return (
    <main className="py-10 lg:py-32">
      <Container small>
        {/*TODO: Filtering  */}
        <section className="bg-neutral-400 flex items-center justify-center h-12">
          WIP
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-5 lg:gap-7 mt-5 mb-7">
          <ProviderCard />
          <ProviderCard />
          <ProviderCard />
          <ProviderCard />
          <ProviderCard />
          <ProviderCard />
          <ProviderCard />
          <ProviderCard />
          <ProviderCard />
          <ProviderCard />
          <ProviderCard />
          <ProviderCard />
          <ProviderCard />
          <ProviderCard />
          <ProviderCard />
          <ProviderCard />
          <ProviderCard />
        </section>
        {/* TODO: Pagination */}
        <section className="bg-neutral-400 flex items-center justify-center h-20 max-w-lg mx-auto">
          WIP
        </section>
      </Container>
    </main>
  );
}
