import { List } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <nav className="py-5 border-b border-b-white border-opacity-20">
      <Container>
        <ul className="flex justify-between items-center">
          <li className="flex items-center gap-2 text-2xl font-bold pr-7 border-r border-white/20">
            <Image
              src="/kisalu-logo.png"
              height={40}
              width={40}
              alt="Kisalu Logo"
            />
            <span className="select-none">Kisalu</span>
          </li>
          <li className="hidden lg:flex gap-7 items-center  text-white text-sm font-regular">
            {/* TODO: Replace with actual link */}
            <Link href="/">Categorias</Link>
            {/* TODO: Replace with an actual link */}
            <Link href="/">Tornar um prestador</Link>
          </li>
          <li className="flex items-center gap-7 pl-7 border-l border-white/20 py-1">
            {/* TODO: Replace with an actual link */}
            <Link href="/" className="text-white text-sm hidden lg:inline">
              Criar Conta
            </Link>
            {/* TODO: Replace with an actual link */}
            <Link
              href="/"
              className="text-white text-sm lg:bg-white lg:text-text-200 lg:px-7 lg:py-1 lg:rounded lg:hover:bg-neutral-300 duration-300"
            >
              Entrar
            </Link>
            {/* TODO: Implement the mobile menu */}
            <button className="lg:hidden">
              <List size={40} color="#fff" />
            </button>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
