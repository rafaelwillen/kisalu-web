import Banner from "@/components/common/Banner";
import Container from "@/components/common/Container";
import ProjectListSection from "@/components/pages/Project/ProjectListSection";

export default function ProjectsPage() {
  const fakeArray = Array.from({ length: 40 });
  return (
    <main className="py-10">
      <Container>
        <Banner
          name="Lista de Projectos"
          description="Todos os projectos que os clientes necessitam de um prestador pode ser encontrado aqui"
        />
      </Container>
      <Container small>
        <ProjectListSection initialData={fakeArray} />
      </Container>
    </main>
  );
}
