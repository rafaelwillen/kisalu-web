import { Input, Select } from "@/components/form";
import { SelectOption } from "@/components/form/types";
import { AdminDashboardLayout } from "@/components/layouts";
import { CategoryCard } from "@/components/pages/admin";
import { Routes } from "@/utils/constants/routes";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react";
import Link from "next/link";
import { NextPageWithLayout } from "../../_app";

const selectOrderOptions: SelectOption[] = [
  {
    value: "name-asc",
    label: "Nome - Asc",
  },
  {
    value: "name-desc",
    label: "Nome - Desc",
  },
  {
    value: "number-services-asc",
    label: "Nº de Serviços - Asc",
  },
  {
    value: "number-services-desc",
    label: "Nº de Serviços - Desc",
  },
  {
    value: "number-activities-asc",
    label: "Nº de Atividades Ativas - Asc",
  },
  {
    value: "number-activities-desc",
    label: "Nº de Atividades Ativas - Desc",
  },
];

const AdminCategoriesPage: NextPageWithLayout = () => {
  return (
    <section className="relative">
      <h1 className="font-bold text-xl leading-relaxed">Categorias Criadas</h1>
      <div className="mt-8 space-y-2 lg:flex items-center gap-4">
        <div className="flex-[2]">
          <Input
            icon={<MagnifyingGlass />}
            autoFocus
            label="Pesquisa"
            placeholder="Pesquise por nome aqui..."
          />
        </div>
        <div className="flex-1">
          <Select label="Ordenar por" options={selectOrderOptions} />
        </div>
      </div>
      <p className="mt-4">8 categorias encontradas</p>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 items-center gap-4">
        <CategoryCard
          imageURL="https://placehold.co/1920x1080.png"
          createdBy="Rafael Padre"
          name="lorem kscocjioc"
          numberActivities={10}
          numberProjects={3}
          numberServices={1}
        />
        <CategoryCard
          imageURL="https://placehold.co/1920x1080.png"
          createdBy="Rafael Padre"
          name="lorem kscocjioc"
          numberActivities={10}
          numberProjects={3}
          numberServices={1}
        />
        <CategoryCard
          imageURL="https://placehold.co/1920x1080.png"
          createdBy="Rafael Padre"
          name="lorem kscocjioc"
          numberActivities={10}
          numberProjects={3}
          numberServices={1}
        />
        <CategoryCard
          imageURL="https://placehold.co/1920x1080.png"
          createdBy="Rafael Padre"
          name="lorem kscocjioc"
          numberActivities={10}
          numberProjects={3}
          numberServices={1}
        />
        <CategoryCard
          imageURL="https://placehold.co/1920x1080.png"
          createdBy="Rafael Padre"
          name="lorem kscocjioc"
          numberActivities={10}
          numberProjects={3}
          numberServices={1}
        />
        <CategoryCard
          imageURL="https://placehold.co/1920x1080.png"
          createdBy="Rafael Padre"
          name="lorem kscocjioc"
          numberActivities={10}
          numberProjects={3}
          numberServices={1}
        />
        <CategoryCard
          imageURL="https://placehold.co/1920x1080.png"
          createdBy="Rafael Padre"
          name="lorem kscocjioc"
          numberActivities={10}
          numberProjects={3}
          numberServices={1}
        />
      </div>
      {/* TODO: Add pagination here */}
      <div></div>
      <Link
        href={Routes.adminCreateCategory}
        className="fixed bottom-4 right-4 bg-primary-400 p-4 lg:p-3 rounded-full lg:rounded-xl flex gap-2 items-center hover:bg-primary-300 hover:duration-200 duration-200"
      >
        <span className="max-lg:hidden">Criar Categoria</span>
        <Plus weight="bold" />
      </Link>
    </section>
  );
};

AdminCategoriesPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default AdminCategoriesPage;
