import Container from "@/components/common/Container";
import UserReviews from "@/components/common/UserReviews";
import { Routes } from "@/utils/constants/routes";
import { Info } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import LocationAndDurationInfo from "./_components/LocationAndDurationInfo";
import ProviderQuickInfo from "./_components/ProductQuickInfo";
import ServicePrice from "./_components/ServicePrice";
import ServiceProductBanner from "./_components/ServiceProductBanner";
import ServiceImagesSlider from "./_components/ServicesImagesSlider";

// TODO: Add dynamic metadata
export const metadata: Metadata = {
  title: "",
};

export default function ServicePage() {
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
          <Link
            className="animated-underline dark"
            href={Routes.singleCategory("web-development")}
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
            <ServiceImagesSlider
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
          <Info />
          <ServicePrice />
          <UserReviews />
        </div>
        <div className="hidden xl:grid grid-cols-2 pl-20">
          <div>
            <LocationAndDurationInfo />
            <ServiceImagesSlider
              imagesUrl={[
                "https://placehold.co/150x111.png?text=1",
                "https://placehold.co/150x111.png?text=2",
                "https://placehold.co/150x111.png?text=3",
                "https://placehold.co/150x111.png?text=4",
                "https://placehold.co/150x111.png?text=5",
                "https://placehold.co/150x111.png?text=6",
              ]}
            />
            <Info />
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
}
