import MainLayout from "@/components/layouts/MainLayout";
import { Container } from "@/components/pages/common";
import { Banner, ServiceCard } from "@/components/pages/services";
import { categoriesPageResult } from "@/mock/category";
import { trendingService } from "@/mock/projects";
import { Routes } from "@/utils/constants/routes";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { NextPageWithLayout } from "../_app";

type Props = {
  category: (typeof categoriesPageResult)[0];
};

interface Params extends ParsedUrlQuery {
  category: string;
}

const ServicesFromSingleCategoryPage: NextPageWithLayout<Props> = ({
  category,
}) => {
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
          imageUrl={category?.banner}
        />
      </Container>
      <Container small>
        <section>
          {/* TODO: Filtering */}
          <select name="" id="">
            <option value="value-1">Value 1</option>
            <option value="value-2">Value 2</option>
            <option value="value-3">Value 3</option>
            <option value="value-4">Value 4</option>
            <option value="value-5">Value 5</option>
            <option value="value-6">Value 6</option>
            <option value="value-7">Value 7</option>
            <option value="value-8">Value 8</option>
          </select>
          <div>
            <span>Ordenar por</span>
            <select name="" id="">
              <option value="value-1">Value 1</option>
              <option value="value-2">Value 2</option>
              <option value="value-3">Value 3</option>
              <option value="value-4">Value 4</option>
              <option value="value-5">Value 5</option>
              <option value="value-6">Value 6</option>
              <option value="value-7">Value 7</option>
              <option value="value-8">Value 8</option>
            </select>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-5 lg:gap-7 mt-5 mb-7">
          {trendingService.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </section>
        <section>{/* TODO: Pagination */}</section>
      </Container>
    </main>
  );
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const categorySlug = context.params?.category!;
  const category = categoriesPageResult.find(
    ({ slug }) => slug === categorySlug
  )!;
  return {
    props: {
      category,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const categories = categoriesPageResult;
  return {
    paths: categories.map((category) => ({
      params: { category: category.slug },
    })),
    fallback: false,
  };
};

ServicesFromSingleCategoryPage.getLayout = (page) => (
  <MainLayout>{page}</MainLayout>
);

export default ServicesFromSingleCategoryPage;
