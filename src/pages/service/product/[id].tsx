import MainLayout from "@/components/layouts/MainLayout";
import { Container } from "@/components/pages/common";
import {
  LocationAndDurationInfo,
  ProviderQuickInfo,
  ServiceInfo,
  ServiceProductBanner,
  UserReviews,
} from "@/components/pages/services";
import { NextPageWithLayout } from "@/pages/_app";
import { Routes } from "@/utils/constants/routes";
import Link from "next/link";

const ServicePage: NextPageWithLayout = () => {
  return (
    <main className="py-10 lg:py-32">
      <Container small>
        <section className="space-x-2 my-5 hidden lg:block text-text-200/60">
          <Link className="animated-underline dark" href={Routes.home}>
            Página Inicial
          </Link>
          <span>/</span>
          <Link className="animated-underline dark" href={Routes.categories}>
            Categorias
          </Link>
          <span>/</span>
          <Link className="animated-underline dark text-text-200" href="#">
            Lorem, ipsum dolor.
          </Link>
        </section>
      </Container>
      <Container>
        <ServiceProductBanner />
        <LocationAndDurationInfo />
        {/* TODO: Implement the slick with preview */}
        <ProviderQuickInfo />
        <ServiceInfo />
        <UserReviews />
      </Container>
    </main>
  );
};

ServicePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ServicePage;
