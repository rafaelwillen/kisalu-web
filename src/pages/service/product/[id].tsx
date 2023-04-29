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
import Head from "next/head";
import Link from "next/link";

const ServicePage: NextPageWithLayout = () => {
  return (
    <main className="py-10 lg:pt-0">
      <Head>
        <title>Kisalu | Lorem ipsum dolor sit amet.</title>
      </Head>
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
          <Link
            className="animated-underline dark"
            href={Routes.singleCategory.replace(
              ":categorySlug",
              "web-development"
            )}
          >
            Categoria aleatória
          </Link>
          <span>/</span>
          <Link className="animated-underline dark text-text-200" href="#">
            Lorem, ipsum dolor.
          </Link>
        </section>
      </Container>
      <Container small>
        <ServiceProductBanner />
        {/* MOBILE ONLY */}
        <div className="block xl:hidden">
          <LocationAndDurationInfo />
          <div className="md:flex items-start gap-4 mt-7">
            <ServiceImageSlider
              imagesUrl={[
                "https://placehold.co/896x665.png?text=1",
                "https://placehold.co/896x665.png?text=2",
                "https://placehold.co/896x665.png?text=3",
                "https://placehold.co/896x665.png?text=4",
                "https://placehold.co/896x665.png?text=5",
                "https://placehold.co/896x665.png?text=6",
              ]}
            />
            <ProviderQuickInfo />
          </div>
          <ServiceInfo />
          <ServicePrice />
          <UserReviews />
        </div>
        <div className="hidden xl:grid grid-cols-2 pl-20">
          <div>
            <LocationAndDurationInfo />
            <ServiceImageSlider
              imagesUrl={[
                "https://placehold.co/150x111.png?text=1",
                "https://placehold.co/150x111.png?text=2",
                "https://placehold.co/150x111.png?text=3",
                "https://placehold.co/150x111.png?text=4",
                "https://placehold.co/150x111.png?text=5",
                "https://placehold.co/150x111.png?text=6",
              ]}
            />
            <ServiceInfo />
            <UserReviews />
          </div>
          <aside className="-mt-16 z-20">
            <ProviderQuickInfo />
            <ServicePrice />
          </aside>
        </div>
      </Container>
    </main>
  );
};

ServicePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ServicePage;
