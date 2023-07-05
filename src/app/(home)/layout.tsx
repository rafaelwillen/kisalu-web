import { HeroImage } from "@/assets/images";
import ScrollToTopButton from "@/components/buttons/ScrollToTopButton";
import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";
import { PropsWithChildren } from "react";
import Hero from "./_components/Hero";

export default function HomePageLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="relative text-white pb-16 h-screen shadow-2xl">
        <Image
          src={HeroImage}
          className="h-full brightness-[.4] -z-10 object-cover object-center"
          fill
          alt=""
          placeholder="blur"
          priority
        />
        <Navbar />
        <Hero />
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
