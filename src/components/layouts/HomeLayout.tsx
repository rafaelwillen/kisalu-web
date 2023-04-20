import { PropsWithChildren } from "react";
import { Container, Footer, Navbar, ScrollToTopButton } from "../pages/common";
import { Hero } from "../pages/home";
import FontLayout from "./FontLayout";

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <FontLayout>
      <header className="relative text-white pb-16 header-bg">
        <Navbar />
        <Hero />
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
