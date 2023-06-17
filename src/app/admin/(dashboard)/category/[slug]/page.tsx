import { Routes } from "@/utils/constants/routes";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import CategoryActions from "./_components/CategoryActions";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function AdminCategoryPage({ params: { slug } }: PageProps) {
  console.log(slug);

  return (
    <main>
      <Link
        href={Routes.adminCategories}
        className="inline-flex items-center gap-2 hover:underline mb-4"
      >
        <ArrowLeft /> Voltar
      </Link>
      {/* TODO: Add the image component */}
      {/* <Image
          className="rounded-md w-full object-cover h-auto max-h-[300px] shadow-xl"
          src={category.bannerImageUrl}
          width={600}
          height={160}
          alt={`${category.name} banner`}
        /> */}
      {/* TODO: Add the name */}
      {/* <h1 className="font-bold text-xl leading-relaxed text-center lg:text-left my-8">
        {category.name}
      </h1> */}
      <div className="md:flex gap-4">
        <div className="flex-1 max-w-sm mx-auto">
          {/* TODO; Add the image */}
          {/* <Image
            className="rounded-md w-full object-cover h-auto max-h-72 shadow-xl"
            src={category.cardImageUrl}
            width={400}
            height={333}
            alt={category.cardImageUrl}
          /> */}
          <div className="bg-white rounded shadow-xl mt-8 p-4 space-y-2 border border-neutral-100">
            <p className="flex justify-between items-center">
              {/* TODO: Add the data */}
              {/* Nº de Serviços: <span>{category.numberOfServices}</span> */}
            </p>
            <p className="flex justify-between items-center">
              {/* TODO: Add the data */}
              {/* Nº de Projectos: <span>{category.numberOfProjects}</span> */}
            </p>
          </div>
          <div className="max-md:hidden">
            <CategoryActions />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="my-6 text-lg leading-relaxed text-center lg:text-left">
            Descrição
          </h2>
          {/* TODO: Add the description */}
          {/* <p className="leading-relaxed">{category.description}</p> */}
        </div>
      </div>
      <div className="md:hidden">
        <CategoryActions />
      </div>
    </main>
  );
}
