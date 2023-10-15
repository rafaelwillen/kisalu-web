import { getServiceById } from "@/api/services";
import Container from "@/components/common/Container";
import UserReviews from "@/components/common/UserReviews";
import { Routes } from "@/utils/constants/routes";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Info from "./_components/Info";
import ProviderQuickInfo from "./_components/ProductQuickInfo";
import ServicePrice from "./_components/ServicePrice";
import ServiceImagesSlider from "./_components/ServicesImagesSlider";

// TODO: Add dynamic metadata
export const metadata: Metadata = {
  title: "",
};

type PageProps = {
  params: {
    id: string;
  };
};

export default async function ServicePage({
  params: { id: serviceId },
}: PageProps) {
  const service = await getServiceById(serviceId);
  if (!service) notFound();
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
            href={Routes.singleCategory(service.category.slug)}
          >
            {service.category.name}
          </Link>
          <span>/</span>
          <Link className="animated-underline dark text-text-200" href="#">
            {service.title}
          </Link>
        </section>
      </Container>
      <Container small>
        {/* MOBILE ONLY */}
        <div className="block xl:hidden">
          <div className="md:flex items-start gap-4 mt-7">
            <ServiceImagesSlider imagesUrl={service.featuredImagesURL} />
            <ProviderQuickInfo
              avatarImageURL={service.User.avatarImageURL}
              firstName={service.User.firstName}
              lastName={service.User.lastName}
              id={service.User.id}
              successRate={0}
              address={service.User.address}
            />
          </div>
          <Info {...service} />
          <ServicePrice
            serviceId={service.id}
            minimumPrice={service.minimumPrice}
          />
          <UserReviews reviews={[]} />
        </div>
        <div className="hidden xl:grid grid-cols-2 pl-20 mt-12 relative">
          <div>
            <ServiceImagesSlider imagesUrl={service.featuredImagesURL} />
            <Info {...service} />
            <UserReviews reviews={[]} />
          </div>
          <aside className="sticky top-0">
            <ProviderQuickInfo
              avatarImageURL={service.User.avatarImageURL}
              firstName={service.User.firstName}
              lastName={service.User.lastName}
              id={service.User.id}
              successRate={0}
              address={service.User.address}
            />
            <ServicePrice
              serviceId={service.id}
              minimumPrice={service.minimumPrice}
            />
          </aside>
        </div>
      </Container>
    </main>
  );
}
