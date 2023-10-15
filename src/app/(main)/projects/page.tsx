import Banner from "@/components/common/Banner";
import Container from "@/components/common/Container";
import { Routes } from "@/utils/constants/routes";
import { getAuthenticationToken } from "@/utils/server";
import { redirect } from "next/navigation";
import ProjectListSection from "./_components/ProjectListSection";

export default function ProjectsPage() {
  const token = getAuthenticationToken();
  if (!token) redirect(Routes.login);
  const fakeArray = Array.from({ length: 40 }).map((_, index) => "test");
  return (
    <main className="py-10">
      <Container>
        <div className="hidden lg:block">
          <Banner
            name="Lista de Projectos"
            description="Todos os projectos que os clientes necessitam de um prestador pode ser encontrado aqui"
          />
        </div>
      </Container>
      <Container small>
        <ProjectListSection initialData={fakeArray} />
      </Container>
    </main>
  );
}
