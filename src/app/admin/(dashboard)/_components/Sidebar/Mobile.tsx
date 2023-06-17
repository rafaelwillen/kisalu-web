"use client";

import HamburgerMenuButton from "@/components/buttons/HamburgerMenuButton";
import LogoutButton from "@/components/buttons/LogoutButton";
import Container from "@/components/common/Container";
import useToggle from "@/hooks/useToggle";
import sidebarLinks from "@/utils/constants/adminSidebarLinks";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { SidebarProps } from "./types";

export default function MobileSidebar({ user }: SidebarProps) {
  const { email, name, avatarImageURL } = user;
  const { isOpen, toggle, close } = useToggle();
  return (
    <>
      <Container>
        <HamburgerMenuButton toggle={toggle} isChecked={isOpen} />
        <aside
          data-is-active={isOpen}
          className={classNames(
            "transition-transform ease-in-out duration-300 lg:hidden bg-primary-100 text-text-200 absolute inset-0 min-h-screen overflow-hidden z-10 border-b py-16 px-8 flex flex-col gap-4",
            !isOpen ? "-translate-x-full" : "-translate-x-0"
          )}
        >
          <div className="flex items-center gap-4">
            <Image
              src={avatarImageURL}
              width={40}
              height={40}
              className="rounded-full bg-white"
              alt=""
            />
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
                    onClick={close}
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
            <LogoutButton type="admin" />
          </div>
        </aside>
      </Container>
    </>
  );
}
