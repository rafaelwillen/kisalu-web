import { KisaluLogo } from "@/assets/images";
import { HamburgerMenuButton } from "@/components/buttons";
import sidebarLinks from "@/utils/constants/adminSidebarLinks";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "../../common";
import { SidebarProps } from "./type";

export default function MobileSidebar({ user }: SidebarProps) {
  const { email, name } = user;
  const [showSidebarMenu, setShowSidebarMenu] = useState(false);
  return (
    <>
      <Container>
        <HamburgerMenuButton
          onChange={setShowSidebarMenu}
          isChecked={showSidebarMenu}
        />
        <aside
          data-is-active={showSidebarMenu}
          className={classNames(
            "transition-transform ease-in-out duration-300 lg:hidden bg-primary-100 text-text-200 absolute inset-0 min-h-screen overflow-hidden z-10 border-b py-16 px-8 flex flex-col gap-4",
            !showSidebarMenu ? "-translate-x-full" : "-translate-x-0"
          )}
        >
          <div className="flex items-center gap-4">
            <Image src={KisaluLogo} className="rounded-full" alt="" />
            <div className="text-sm">
              <p className="font-bold text-lg">{name}</p>
              <p>{email}</p>
            </div>
          </div>
          <nav className="flex-1">
            <ul className="flex flex-col mt-12 gap-8 text-sm">
              {sidebarLinks.map(({ href, title }) => (
                <li key={href}>
                  <Link
                    onClick={() => setShowSidebarMenu(false)}
                    className="bg-white shadow-sm rounded-md py-3 block hover:bg-white/70 text-center"
                    href={href}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <Link href="#" className="text-danger hover:underline">
              Finalizar sessão
            </Link>
          </div>
        </aside>
      </Container>
    </>
  );
}
