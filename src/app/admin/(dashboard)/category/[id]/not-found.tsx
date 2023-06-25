import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Routes } from "@/utils/constants/routes";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AdminCategoryNotFound() {
  return (
    <main className="flex flex-col py-10 justify-center mx-auto min-h-screen max-w-4xl">
      <h1 className="text-5xl text-center font-bold my-5 lg:text-9xl">
        40<span className="text-secondary-700">4</span>
      </h1>
      <p className="text-xl font-bold text-center ">
        Categoria não encontrada.
      </p>
      <p className="text-center mt-5">
        A categoria que estás à procura não existe. Por favor, verifica a URL ou
        volta para a página de categorias.
      </p>
      <div className="md:max-w-md self-center w-full mt-8">
        <Link href={Routes.adminCategories} legacyBehavior>
          <PrimaryButton>
            Voltar para a página de categorias <ArrowUpRight size={20} />
          </PrimaryButton>
        </Link>
      </div>
    </main>
  );
}
