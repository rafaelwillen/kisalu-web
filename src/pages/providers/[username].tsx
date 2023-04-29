import MainLayout from "@/components/layouts/MainLayout";
import { Container, UserReviews } from "@/components/pages/common";
import {
  ContactMe,
  ProviderBasicPortfolio,
  ProviderDescription,
  QuickInfo,
  SingleProviderBanner,
  Skills,
  TrendingServices,
} from "@/components/pages/providers";
import { trendingService } from "@/mock/projects";
import { Routes } from "@/utils/constants/routes";
import Head from "next/head";
import Link from "next/link";
import { NextPageWithLayout } from "../_app";

const ProviderPage: NextPageWithLayout = () => {
  return (
    <main className="py-10 lg:pt-0">
      <Head>
        <title>Kisalu | Perfil Prestador - Lorem, ipsum.</title>
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
        <div className="block xl:hidden">
          <QuickInfo />
          <ProviderDescription />
          <ProviderBasicPortfolio />
          <TrendingServices services={trendingService} />
          <UserReviews showLinkToService />
        </div>
        <div className="hidden xl:grid grid-cols-[auto,35%] gap-8">
          <div>
            <QuickInfo />
            <ProviderDescription />
            <ProviderBasicPortfolio />
            <TrendingServices services={trendingService} />
            <UserReviews showLinkToService />
          </div>
          <aside className="-mt-16 z-20 mr-9 space-y-4">
            <ContactMe />
            <Skills />
          </aside>
        </div>
      </Container>
    </main>
  );
};

ProviderPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ProviderPage;
