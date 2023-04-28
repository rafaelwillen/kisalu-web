import MainLayout from "@/components/layouts/MainLayout";
import { Container } from "@/components/pages/common";
import { Banner, ProviderCard } from "@/components/pages/providers";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const ProviderPage: NextPageWithLayout = () => {
  return (
    <main className="py-10 lg:py-32">
      <Head>
        <title>Kisalu | Os Nossos Prestadores</title>
      </Head>
      <Container small>
        <Banner />
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
};

ProviderPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ProviderPage;
