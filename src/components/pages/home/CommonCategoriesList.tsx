import { homeBrowseByCategory } from "@/mock/category";
import { Routes } from "@/utils/constants/routes";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import CommonCategoryCard from "./CommonCategoryCard";

export default function CommonCategoriesList() {
  return (
    <section className="mt-10 lg:mt-28">
      <div className="lg:flex items-center justify-between lg:mb-20">
        <h2 className="text-3xl font-bold mb-14 lg:mb-0">
          Procurar prestadores por categoria
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
        {homeBrowseByCategory.map((category) => (
          <CommonCategoryCard {...category} key={category.id} />
        ))}
      </article>
    </section>
  );
}
