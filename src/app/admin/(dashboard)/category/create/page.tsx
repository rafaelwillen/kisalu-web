import AdminCreateCategoryForm from "@/components/forms/AdminCreateCategoryForm";

export default function AdminCreateCategoryPage() {
  return (
    <section>
      <h1 className="font-bold text-xl leading-relaxed">Criar Categoria</h1>
      <AdminCreateCategoryForm />
      <p className="text-sm">* - Campos obrigatórios</p>
    </section>
  );
}
