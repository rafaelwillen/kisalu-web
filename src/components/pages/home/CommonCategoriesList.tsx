import { homeBrowseByCategory } from "@/mock/category";
import { Placeholder } from "@phosphor-icons/react";
import Link from "next/link";

export default function CommonCategoriesList() {
  function formatNumberToLocale(number: number) {
    return typeof document !== undefined
      ? new Intl.NumberFormat().format(number)
      : number;
  }

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
          <div
            key={category.id}
            className="px-7 py-10 space-y-7 flex-1 border border-neutral-200"
          >
            <Placeholder
              size={40}
              className="text-primary-600 relative category-bg-icon"
            />
            <div className="space-y-1">
              <p>
                {formatNumberToLocale(category.freelancersCount)} prestadores
              </p>
              <p className="text-lg font-regular min-w-[200px]">
                {category.name}
              </p>
              <p className="text-neutral-500 min-w-[200px]">{category.field}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
