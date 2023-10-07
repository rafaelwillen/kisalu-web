import { getMostPopularCategories } from "@/api/category";
import CommonCategoryCard from "./CommonCategoryCard";

export default async function PopularCategories() {
  const categories = await getMostPopularCategories();
  return (
    <section className="mt-10 lg:mt-28">
      <h2 className="text-3xl font-bold mb-14 lg:mb-20">
        Categorias Mais Populares
      </h2>
      <article className="mt-5 flex overflow-auto gap-2 lg:grid grid-cols-4 lg:gap-7 lg:mt-0 lg:py-4 lg:overflow-hidden">
        {categories.map((category) => (
          <CommonCategoryCard category={category} key={category.slug} />
        ))}
      </article>
    </section>
  );
}
