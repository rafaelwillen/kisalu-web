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
          <div>
            <LogoutButton type="admin" />
          </div>
        </aside>
      </Container>
    </>
  );
}
