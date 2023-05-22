import { ImageInput, Input } from "@/components/form";
import { AdminDashboardLayout } from "@/components/layouts";
import { NextPageWithLayout } from "@/pages/_app";

const AdminCreateCategoryPage: NextPageWithLayout = () => {
  return (
    <section>
      <h1 className="font-bold text-xl leading-relaxed">Criar Categoria</h1>
      <form>
        <Input label="Nome da Categoria" />
        <ImageInput
          errorMessage="okok"
          name="banner"
          label="Clique aqui para adicionar o banner da
          categoria"
        />
      </form>
    </section>
  );
};

AdminCreateCategoryPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default AdminCreateCategoryPage;
