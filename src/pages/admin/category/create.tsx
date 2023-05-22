import PrimaryButton from "@/components/buttons/PrimaryButton";
import { ImageInput, Input, TextArea } from "@/components/form";
import { AdminDashboardLayout } from "@/components/layouts";
import { NextPageWithLayout } from "@/pages/_app";

const AdminCreateCategoryPage: NextPageWithLayout = () => {
  return (
    <section>
      <h1 className="font-bold text-xl leading-relaxed">Criar Categoria</h1>
      <form className="my-4 space-y-8">
        <Input label="Nome da Categoria" />
        <ImageInput
          name="banner"
          label="Clique aqui para adicionar o banner da
          categoria"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ImageInput
            name="cover"
            label="Clique aqui para adicionar a imagem da
          categoria"
          />
          <TextArea label="Descrição" />
        </div>
        <PrimaryButton type="submit">Criar Categoria</PrimaryButton>
      </form>
      <p className="text-sm">* - Campos obrigatórios</p>
    </section>
  );
};

AdminCreateCategoryPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default AdminCreateCategoryPage;
