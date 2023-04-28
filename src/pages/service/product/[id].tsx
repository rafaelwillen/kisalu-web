import MainLayout from "@/components/layouts/MainLayout";
import { Container } from "@/components/pages/common";
import {
  LocationAndDurationInfo,
  ProviderQuickInfo,
  ServiceImageSlider,
  ServiceInfo,
  ServicePrice,
  ServiceProductBanner,
  UserReviews,
} from "@/components/pages/services";
import { NextPageWithLayout } from "@/pages/_app";
import { Routes } from "@/utils/constants/routes";
import Link from "next/link";

const ServicePage: NextPageWithLayout = () => {
  return (
    <main className="py-10 lg:pt-0">
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
        <ServiceImageSlider
          imagesUrl={[
            "https://placehold.co/388x288.png?text=1",
            "https://placehold.co/388x288.png?text=2",
            "https://placehold.co/388x288.png?text=3",
            "https://placehold.co/388x288.png?text=4",
            "https://placehold.co/388x288.png?text=5",
            "https://placehold.co/388x288.png?text=6",
          ]}
        />
        <ProviderQuickInfo />
        <ServiceInfo />
        <ServicePrice />
        <UserReviews />
      </Container>
    </main>
  );
};

ServicePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ServicePage;
