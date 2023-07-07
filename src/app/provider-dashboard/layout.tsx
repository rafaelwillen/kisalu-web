import Container from "@/components/common/Container";
import { PropsWithChildren } from "react";

export default function ProviderDashboardLayout({
  children,
}: PropsWithChildren) {
  return (
    <div>
      {/* TODO: Sidebar */}
      <div>
        <Container small>
          <main className="min-h-screen">{children}</main>
        </Container>
      </div>
    </div>
  );
}
