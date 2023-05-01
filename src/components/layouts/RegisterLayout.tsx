import { Routes } from "@/utils/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { Container } from "../pages/common";
import FontLayout from "./FontLayout";

export default function RegisterLayout({ children }: PropsWithChildren) {
  return (
    <FontLayout>
      <header>
        <nav className="py-5 border-b  border-opacity-20 relative border-b-neutral-600">
          <Container>
            <Link
              href={Routes.home}
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <Image
                src="/kisalu-logo.png"
                height={40}
                width={40}
                alt="Kisalu Logo"
              />
              <span className="select-none text-text-200">Kisalu</span>
            </Link>
          </Container>
        </nav>
      </header>
      {children}
    </FontLayout>
  );
}
