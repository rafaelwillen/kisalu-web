import { getSingleCategoryByIdFromAdmin } from "@/api/category";
import { Routes } from "@/utils/constants/routes";
import { getPlaceholder } from "@/utils/imagePlaceholder";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CategoryActions from "./_components/CategoryActions";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function AdminCategoryPage({ params: { id } }: PageProps) {
  const token = cookies().get("token")?.value;
  const category = await getSingleCategoryByIdFromAdmin(id, token);
  if (!category) return notFound();
  const bannerPlaceholder = await getPlaceholder(category.bannerImageURL);
  const mainImagePlaceholder = await getPlaceholder(category.mainImageURL);

  return (
    <main>
      <div className="relative rounded-2xl py-28 lg:py-48 shadow-lg">
        <Image
          priority
          className="rounded-2xl object-cover"
          src={category.bannerImageURL}
          fill
          alt={`${category.name} banner`}
          placeholder="blur"
          blurDataURL={bannerPlaceholder}
        />
      </div>
      <h1 className="font-bold text-xl leading-relaxed text-center my-8">
        {category.name}
      </h1>
      <div className="md:flex gap-8">
        <div className="flex-1 max-w-sm">
          <Image
            className="rounded-md w-full object-cover h-auto max-h-60 shadow-xl"
            src={category.mainImageURL}
            width={384}
            height={245}
            alt={`${category.name} main image`}
            placeholder="blur"
            blurDataURL={mainImagePlaceholder}
          />
          <div className="bg-white rounded shadow-xl mt-8 p-4 space-y-2 border border-neutral-100">
            <p className="flex justify-between items-center">
              Nº de Serviços: <span>{category.services.length}</span>
            </p>
            <p className="flex justify-between items-center">
              Nº de Projectos: <span>{category.projects.length}</span>
            </p>
            <p className="flex justify-between items-center">
              Criado em:{" "}
              <span>{new Date(category.createdAt).toLocaleDateString()}</span>
            </p>
            <p className="flex justify-between items-center">
              Criado por:{" "}
              <Link
                className="text-primary-400 underline"
                href={Routes.adminSingleUser(category.admin.id)}
              >
                {category.admin.firstName + " " + category.admin.lastName}
              </Link>
            </p>
          </div>
          <div className="max-md:hidden">
            <CategoryActions categoryId={id} token={token} />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="my-6 text-lg leading-relaxed text-center lg:text-left">
            Descrição
          </h2>
          <p className="leading-relaxed">{category.description}</p>
        </div>
      </div>
      <div className="md:hidden">
        <CategoryActions categoryId={id} token={token} />
      </div>
    </main>
  );
}
