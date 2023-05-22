import { PropsWithChildren } from "react";
import { Sidebar } from "../pages/admin";
import { Container } from "../pages/common";

export default function AdminDashboardLayout({ children }: PropsWithChildren) {
  return (
    <main className="relative lg:grid grid-cols-[30%,1fr] gap-8 min-h-screen">
      <Sidebar />
      <div className="pt-6 max-h-screen lg:overflow-y-auto">
        <Container small>{children}</Container>
      </div>
    </main>
  );
}
