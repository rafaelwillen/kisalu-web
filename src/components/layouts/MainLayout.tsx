import { PropsWithChildren } from "react";
import { Container, Footer, Navbar, ScrollToTopButton } from "../pages/common";
import FontLayout from "./FontLayout";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <FontLayout>
      <header className="relative text-white">
        <Navbar whiteBackground />
      </header>
      {children}
      <div className="bg-secondary-950 static z-90 py-5">
        <Container small>
          <Footer />
        </Container>
      </div>
      <ScrollToTopButton />
    </FontLayout>
  );
}
