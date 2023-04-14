import { List } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-5 px-5 border-b border-b-white border-opacity-20">
      <ul className="flex justify-between items-center">
        <li className="flex items-center gap-2 text-2xl font-bold">
          <Image
            src="/kisalu-logo.png"
            height={40}
            width={40}
            alt="Kisalu Logo"
          />
          <span>Kisalu</span>
        </li>
        <li className="flex items-center gap-7">
          {/* TODO: Replace with an actual link */}
          <Link href="#" className="text-white text-sm">
            Entrar
          </Link>
          {/* TODO: Implement the mobile menu */}
          <button>
            <List size={40} color="#fff" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
