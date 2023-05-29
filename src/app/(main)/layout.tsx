import ScrollToTopButton from "@/components/buttons/ScrollToTopButton";
import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="relative text-white">
        <Navbar whiteBackground />
      </header>
      {children}
      <div className="bg-secondary-950 static py-5">
        <Container small>
          <Footer />
        </Container>
      </div>
      <ScrollToTopButton />
    </>
  );
}
