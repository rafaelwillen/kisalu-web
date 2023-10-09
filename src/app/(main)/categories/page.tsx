import { getAllPublicCategories } from "@/api/category";
import Container from "@/components/common/Container";
import { Routes } from "@/utils/constants/routes";
import { getAuthenticationToken } from "@/utils/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import CategoryCard from "./_components/CategoryCard";

export const metadata: Metadata = {
  title: "Categorias",
};

export default async function CategoryPage() {
  const token = getAuthenticationToken();
  if (!token) redirect(Routes.login);
  const categories = await getAllPublicCategories();

  return (
    <main className="py-10">
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
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7 mb-5">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </section>
      </Container>
    </main>
  );
}
