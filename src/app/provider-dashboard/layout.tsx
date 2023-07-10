import Container from "@/components/common/Container";
import { Code } from "lucide-react";
import { PropsWithChildren } from "react";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

export default function ProviderDashboardLayout({
  children,
}: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <div className="grid lg:grid-cols-provider-dashboard flex-1">
        <Sidebar />
        <main className="bg-accent-100 rounded-md  py-4 px-2 lg:p-14">
          {children}
        </main>
      </div>
      <footer className="py-4">
        <Container>
          <div className="flex flex-col md:flex-row justify-center items-center text-sm gap-4 md:gap-20">
            <p className="text-opacity-70 max-md:text-center">
              © Kisalu. {new Date().getFullYear()} Todos os direitos reservados.
            </p>
            <div className="flex gap-2 items-center text-opacity-70">
              <Code /> Feito por
              <a
                target="_blank"
                className="animated-underline dark"
                href="https://github.com/rafaelwillen"
              >
                Rafael Padre
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
