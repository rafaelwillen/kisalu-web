import { Routes } from "@/utils/constants/routes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = Array.from({ length: 12 }, (_, i) => ({
  id: i,
}));

export default function PopularCategoriesLoadingState() {
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
        {categories.map(({ id }) => (
          <div
            className="px-7 py-10 space-y-7 flex-1 border border-neutral-200 lg:border-neutral-50 lg:shadow-lg hover:bg-neutral-200/40 duration-300 cursor-pointer"
            key={id}
          >
            <div className="relative  inline-block">
              <div className="animate-pulse bg-primary-100 w-10 h-10 rounded-full" />
            </div>
            <div className="space-y-1">
              <div className="animate-pulse bg-primary-100 w-3/4 h-6 rounded" />
              <div className="animate-pulse bg-primary-100 w-1/2 h-4 rounded" />
              <div className="animate-pulse bg-primary-100 w-1/2 h-4 rounded" />
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
