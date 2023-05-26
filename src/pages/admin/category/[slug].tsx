import CategoryAPI from "@/api/admin/category";
import { GetSingleCategoryResponseDataType } from "@/api/admin/types";
import { AdminDashboardLayout } from "@/components/layouts";
import { CategoryActions } from "@/components/pages/admin";
import { NextPageWithLayout } from "@/pages/_app";
import { Routes } from "@/utils/constants/routes";
import { ArrowLeft } from "@phosphor-icons/react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
  category: GetSingleCategoryResponseDataType;
};

const CategoryPage: NextPageWithLayout<PageProps> = ({ category }) => {
  return (
    <section>
      <Link
        href={Routes.adminCategories}
        className="inline-flex items-center gap-2 hover:underline mb-4"
      >
        <ArrowLeft /> Voltar
      </Link>
      <Image
        className="rounded-md w-full object-cover h-auto max-h-[300px] shadow-xl"
        src={category.bannerImageUrl}
        width={600}
        height={160}
        alt={`${category.name} banner`}
      />
      <h1 className="font-bold text-xl leading-relaxed text-center lg:text-left my-8">
        {category.name}
      </h1>
      <div className="md:flex gap-4">
        <div className="flex-1 max-w-sm mx-auto">
          <Image
            className="rounded-md w-full object-cover h-auto max-h-72 shadow-xl"
            src={category.cardImageUrl}
            width={400}
            height={333}
            alt={category.cardImageUrl}
          />
          <div className="bg-white rounded shadow-xl mt-8 p-4 space-y-2 border border-neutral-100">
            <p className="flex justify-between items-center">
              Nº de Serviços: <span>{category.numberOfServices}</span>
            </p>
            <p className="flex justify-between items-center">
              Nº de Projectos: <span>{category.numberOfProjects}</span>
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
          <p className="leading-relaxed">{category.description}</p>
        </div>
      </div>
      <div className="md:hidden">
        <CategoryActions />
      </div>
    </section>
  );
};

CategoryPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slugParams = context.params?.slug;
  if (!slugParams)
    return {
      notFound: true,
    };
  const slug = Array.isArray(slugParams) ? slugParams[0] : slugParams;
  const category = await CategoryAPI.getBySlug(slug);
  if (!category) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      category,
    },
  };
};

export default CategoryPage;
