import { getMostPopularCategories } from "@/api/category";
import { Routes } from "@/utils/constants/routes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CommonCategoryCard from "./CommonCategoryCard";

export default async function PopularCategories() {
  const categories = await getMostPopularCategories();
  return (
    <section className="mt-10 lg:mt-28">
      <div className="lg:flex items-center justify-between lg:mb-20">
        <h2 className="text-3xl font-bold mb-14 lg:mb-0">
          Categorias Mais Populares
        </h2>
        <Link
          href={Routes.categories}
          className="font-bold group flex items-center gap-2"
        >
          Todas as categorias
          <ArrowRight className="group-hover:translate-x-2 duration-300" />
        </Link>
      </div>
      <article className="mt-5 flex overflow-auto gap-2 lg:grid grid-cols-4 lg:gap-7 lg:mt-0 lg:py-4 lg:overflow-hidden">
        {categories.map((category) => (
          <CommonCategoryCard category={category} key={category.slug} />
        ))}
      </article>
    </section>
  );
}
