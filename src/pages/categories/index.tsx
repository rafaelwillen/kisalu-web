import MainLayout from "@/components/layouts/MainLayout";
import CategoryCard from "@/components/pages/categories/CategoryCard";
import { Container } from "@/components/pages/common";
import { categoriesPageResult } from "@/mock/category";
import { NextPageWithLayout } from "../_app";

const CategoriesPage: NextPageWithLayout = () => {
  return (
    <main className="py-10 lg:py-32">
      <section className="mb-10">
        <Container small>
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">
            Categorias Disponíveis
          </h1>
          <p className="text-justify leading-7">
            Nossa plataforma facilita a navegação e filtragem através de nossa
            extensa seleção de prestadores, permitindo que você encontre o
            profissional certo para o seu projeto de forma rápida e eficiente.
          </p>
        </Container>
      </section>
      <Container small>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 mb-5">
          {categoriesPageResult.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </section>
        {/* TODO: Implement the pagination */}
        {/* <Pagination /> */}
      </Container>
    </main>
  );
};

CategoriesPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default CategoriesPage;
