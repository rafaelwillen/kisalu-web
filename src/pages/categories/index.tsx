import { Pagination } from "@/components/elements";
import MainLayout from "@/components/layouts/MainLayout";
import CategoryCard from "@/components/pages/categories/CategoryCard";
import { Container } from "@/components/pages/common";
import { categoriesPageResult } from "@/mock/category";
import { NextPageWithLayout } from "../_app";

const CategoriesPage: NextPageWithLayout = () => {
  return (
    <Container>
      <h1>Categorias Disponíveis</h1>
      <section>
        {categoriesPageResult.map((category) => (
          <CategoryCard key={category.name} />
        ))}
      </section>
      <Pagination />
    </Container>
  );
};

CategoriesPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default CategoriesPage;
