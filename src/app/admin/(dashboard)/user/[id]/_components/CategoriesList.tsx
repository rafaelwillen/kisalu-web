"use client";
import useCategoryNameSearch from "@/hooks/filtering/useCategoryNameSearch";
import { SearchIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  items: {
    name: string;
    link: string;
  }[];
};

export default function CategoriesList({ items }: Props) {
  const { filteredCategories, searchQuery } = useCategoryNameSearch(items);
  return (
    <section className="border border-neutral-200 px-4 pt-6 rounded-lg space-y-4 shadow-sm">
      <h2 className="font-bold leading-relaxed">Categorias Criadas</h2>
      <div className="md:flex flex-row items-center gap-4">
        {searchQuery.value ? (
          <p>{filteredCategories.length} categorias encontradas</p>
        ) : (
          <p>{items.length} categorias criadas</p>
        )}
        <div className="flex gap-2 flex-1 items-center border-b border-black/10 focus-within:border-black/40 duration-150">
          <SearchIcon size={18} />
          <input
            className="border-none focus:ring-0 focus:outline-none flex-1"
            type="search"
            placeholder="Pesquisar categoria..."
            {...searchQuery}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center max-h-52 py-1 overflow-y-auto">
        {filteredCategories.map(({ link, name }) => (
          <Link
            key={name}
            href={link}
            className="bg-accent-50 text-accent-400 border border-accent-400 p-2 rounded-full text-sm  hover:bg-accent-100 duration-100 hover:underline"
          >
            {name}
          </Link>
        ))}
      </div>
    </section>
  );
}
