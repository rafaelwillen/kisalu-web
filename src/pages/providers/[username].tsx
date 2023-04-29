import MainLayout from "@/components/layouts/MainLayout";
import { Container } from "@/components/pages/common";
import { SingleProviderBanner } from "@/components/pages/providers";
import { Routes } from "@/utils/constants/routes";
import Head from "next/head";
import Link from "next/link";
import { NextPageWithLayout } from "../_app";

const ProviderPage: NextPageWithLayout = () => {
  return (
    <main className="py-10 lg:pt-0">
      <Head>
        <title>Kisalu | Perfil Provedor - Lorem, ipsum.</title>
      </Head>
      <Container small>
        <section className="space-x-2 my-5 hidden lg:block text-text-200/60">
          <Link className="animated-underline dark" href={Routes.home}>
            Página Inicial
          </Link>
          <span>/</span>
          <Link className="animated-underline dark" href={Routes.providers}>
            Prestadores
          </Link>
          <span>/</span>
          <Link className="animated-underline dark text-text-200" href="#">
            Lorem, ipsum.
          </Link>
        </section>
        <SingleProviderBanner />
      </Container>
    </main>
  );
};

ProviderPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ProviderPage;
