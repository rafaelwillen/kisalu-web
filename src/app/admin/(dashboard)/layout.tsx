import Container from "@/components/common/Container";
import { PropsWithChildren } from "react";
import Sidebar from "./_components/Sidebar";

export default function AdminPageLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative lg:grid grid-cols-[20%,1fr] gap-8 min-h-screen">
      <Sidebar />
      <div className="pt-6 max-h-screen lg:overflow-y-auto">
        <Container small>{children}</Container>
      </div>
    </div>
  );
}
