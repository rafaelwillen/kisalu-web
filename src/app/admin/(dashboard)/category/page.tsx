import { getAllCategoriesFromAdmin } from "@/api/category";
import { Routes } from "@/utils/constants/routes";
import { Plus } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import CategoriesListClient from "./_components/CategoriesListClient";

export default async function AdminCategoriesPage() {
  const token = cookies().get("token")?.value;
  const categories = await getAllCategoriesFromAdmin(token);
  return (
    <section className="relative">
      <h1 className="font-bold text-xl leading-relaxed">Categorias Criadas</h1>
      <CategoriesListClient token={token} initialCategories={categories} />
      <Link
        href={Routes.adminCreateCategory}
        title="Criar categoria"
        className="fixed bottom-4 right-4 bg-primary-500 hover:bg-primary-600 text-white p-4 rounded-full shadow-lg"
      >
        <Plus size={24} />
      </Link>
    </section>
  );
}
