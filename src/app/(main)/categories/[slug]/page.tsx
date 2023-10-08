import { getAuthenticatedUser } from "@/api/authentication";
import { getCategoryBySlug } from "@/api/category";
import Banner from "@/components/common/Banner";
import Container from "@/components/common/Container";
import ServiceCard from "@/components/common/ServiceCard";
import { Routes } from "@/utils/constants/routes";
import { getAuthenticationToken } from "@/utils/server";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function SingleCategoryPage({
  params: { slug },
}: PageProps) {
  const token = getAuthenticationToken();
  if (!token) redirect(Routes.login);
  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const user = await getAuthenticatedUser(token);

  return (
    <main className="pb-10 pt-10 lg:pt-0">
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
            className="animated-underline dark text-text-200"
            href={category.slug}
          >
            {category.name}
          </Link>
        </section>
      </Container>
      <Container>
        <Banner
          name={category.name}
          description={category.description}
          imageUrl={category?.bannerImageURL}
        />
      </Container>
      <Container small>
        {user.role === "Client" ? (
          <p className="text-xl">Serviços Disponíveis</p>
        ) : (
          <p className="text-xl">Projectos Disponíveis</p>
        )}
        <hr className="text-neutral-200 mt-4" />
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-5 lg:gap-7 mt-5 mb-7">
          {user.role === "Client"
            ? category.services.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))
            : category.projects.map((project) => <></>)}
        </section>
      </Container>
    </main>
  );
}
