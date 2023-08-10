"use client";

import HamburgerMenuButton from "@/components/buttons/HamburgerMenuButton";
import Container from "@/components/common/Container";
import { useAuth } from "@/context/AuthContext";
import useToggle from "@/hooks/useToggle";
import sidebarLinks from "@/utils/constants/adminSidebarLinks";
import classNames from "classnames";
import { LogOutIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MobileSidebar() {
  const { user, logout } = useAuth();
  const { email, firstName, lastName, avatarImageURL } = user!;
  const { isOpen, toggle, close } = useToggle();
  const name = `${firstName} ${lastName}`;
  return (
    <>
      <Container>
        <HamburgerMenuButton toggle={toggle} isChecked={isOpen} />
        <aside
          data-is-active={isOpen}
          className={classNames(
            "transition-transform ease-in-out duration-300 lg:hidden bg-primary-200 text-text-200 absolute inset-0 min-h-screen overflow-hidden z-10 border-b py-16 px-8 flex flex-col gap-4",
            !isOpen ? "-translate-x-full" : "-translate-x-0"
          )}
        >
          <div className="flex items-center gap-4 flex-col">
            <Image
              src={avatarImageURL}
              width={40}
              height={40}
              className="rounded-full bg-white"
              alt=""
            />
            <div className="text-sm text-center">
              <p className="font-bold text-lg">{name}</p>
              <p>{email}</p>
            </div>
          </div>
          <nav className="flex-1">
            <ul className="flex flex-col mt-4 gap-2 text-sm">
              {sidebarLinks.map(({ href, title }) => (
                <li key={href}>
                  <Link
                    onClick={close}
                    href={href}
                    className="text-center py-4 block"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            onClick={() => logout("Administrator")}
            className="text-center self-center flex items-center gap-4 text-danger hover:underline"
          >
            <LogOutIcon /> Finalizar sessão
          </button>
        </aside>
      </Container>
    </>
  );
}
