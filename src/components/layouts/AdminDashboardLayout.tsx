import Head from "next/head";
import { PropsWithChildren } from "react";
import { Sidebar } from "../pages/admin";
import { Container } from "../pages/common";

export default function AdminDashboardLayout({ children }: PropsWithChildren) {
  return (
    <main className="relative lg:grid grid-cols-[30%,1fr] gap-8 min-h-screen">
      <Head>
        <title>Página de Administrador | Kisalu</title>
      </Head>
      <Sidebar />
      <div className="pt-6 max-h-screen lg:overflow-y-auto">
        <Container small>{children}</Container>
      </div>
    </main>
  );
}
