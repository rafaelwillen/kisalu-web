import { HamburgerMenuButton } from "@/components/buttons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AsideMenu from "./AsideMenu";
import Container from "./Container";

export default function Navbar() {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false);

  return (
    <nav className="py-5 border-b border-b-white border-opacity-20 relative">
      <Container>
        <ul className="flex justify-between items-center">
          <li>
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold pr-7 lg:border-r border-white/20"
            >
              <Image
                src="/kisalu-logo.png"
                height={40}
                width={40}
                alt="Kisalu Logo"
              />
              <span className="select-none">Kisalu</span>
            </Link>
          </li>
          <li className="hidden lg:flex gap-7 items-center  text-white text-sm font-regular">
            {/* TODO: Replace with actual link */}
            <Link href="/" className="animated-underline">
              Categorias
            </Link>
            {/* TODO: Replace with an actual link */}
            <Link href="/" className="animated-underline">
              Tornar-se um prestador
            </Link>
          </li>
          <li className="flex items-center gap-7 pl-7 lg:border-l border-white/20 py-1">
            {/* TODO: Replace with an actual link */}
            <Link
              href="/"
              className="text-white text-sm hidden lg:inline animated-underline"
            >
              Criar Conta
            </Link>
            {/* TODO: Replace with an actual link */}
            <Link
              href="/"
              className="text-white text-sm lg:bg-white lg:text-text-200 lg:px-7 lg:py-1 lg:rounded lg:hover:bg-neutral-300 duration-300 animated-underline mr-12"
            >
              Entrar
            </Link>
            <HamburgerMenuButton
              darkBackground={!showSidebarMenu}
              onChange={setShowSidebarMenu}
              isChecked={showSidebarMenu}
            />
          </li>
        </ul>
        <AsideMenu visible={showSidebarMenu} />
      </Container>
    </nav>
  );
}
