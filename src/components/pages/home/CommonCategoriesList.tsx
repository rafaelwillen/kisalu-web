import { homeBrowseByCategory } from "@/mock/category";
import Link from "next/link";
import CommonCategoryCard from "./CommonCategoryCard";

export default function CommonCategoriesList() {
  return (
    <section className="mt-10">
      <h2 className="text-3xl font-bold mb-14">
        Procurar prestadores por categoria
      </h2>
      {/* TODO: Replace with actual link */}
      <Link href="#" className="font-bold ">
        Todas as categorias →
      </Link>
      <article className="mt-5 flex overflow-auto gap-2">
        {homeBrowseByCategory.map((category) => (
          <CommonCategoryCard {...category} />
        ))}
      </article>
    </section>
  );
}
