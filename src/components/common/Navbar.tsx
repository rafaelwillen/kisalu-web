"use client";

import { KisaluLogo } from "@/assets/images";
import { useAuth } from "@/context/AuthContext";
import useToggle from "@/hooks/useToggle";
import { Routes } from "@/utils/constants/routes";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenuButton from "../buttons/HamburgerMenuButton";
import AsideMenu from "./AsideMenu";
import ClientProfileButton from "./ClientProfileButton";
import Container from "./Container";

type Props = {
  whiteBackground?: boolean;
};

export default function Navbar({ whiteBackground }: Props) {
  const { isOpen: showSidebarMenu, toggle: toggleSideMenu } = useToggle();
  const { isAdmin, token, user } = useAuth();

  return (
    <nav
      className={classNames(
        "py-5 border-b border-opacity-20 relative",
        whiteBackground ? "border-b-neutral-600" : "border-b-white"
      )}
    >
      <Container>
        <ul className="flex justify-between items-center">
          <li>
            <Link
              href={Routes.home}
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <Image
                src={KisaluLogo}
                height={40}
                width={40}
                alt="Kisalu Logo"
              />
              <span
                className={classNames(
                  "select-none",
                  whiteBackground && "text-text-200"
                )}
              >
                Kisalu
              </span>
            </Link>
          </li>
          <li
            className={classNames(
              "hidden lg:flex gap-7 items-center text-sm font-regular",
              whiteBackground ? "text-text-200" : "text-white"
            )}
          >
            <Link
              href={Routes.categories}
              className={classNames(
                "animated-underline",
                whiteBackground && "dark"
              )}
            >
              Categorias
            </Link>
            <Link
              href={Routes.providers}
              className={classNames(
                "animated-underline",
                whiteBackground && "dark"
              )}
            >
              Prestadores
            </Link>
            <Link
              href={Routes.projects}
              className={classNames(
                "animated-underline",
                whiteBackground && "dark"
              )}
            >
              Projectos
            </Link>
          </li>
          <li className="flex items-center gap-7 py-1">
            {token && !isAdmin && user ? (
              <ClientProfileButton
                whiteBackground={whiteBackground}
                avatarImageURL={user.avatarImageURL}
                name={`${user.firstName} ${user.lastName}`}
              />
            ) : (
              <>
                <Link
                  href={Routes.register}
                  className={classNames(
                    "text-sm hidden lg:inline animated-underline",
                    whiteBackground ? "text-text-200 dark" : "text-white"
                  )}
                >
                  Criar Conta
                </Link>
                <Link
                  href={Routes.login}
                  className={classNames(
                    "lg:px-7 lg:py-2 lg:rounded  duration-300 mr-16 lg:mr-0",
                    whiteBackground
                      ? "lg:bg-primary-600 lg:hover:bg-primary-500 text-text-200 lg:text-white"
                      : "text-white text-sm lg:bg-white lg:text-text-200 lg:hover:bg-neutral-300"
                  )}
                >
                  Entrar
                </Link>
                <HamburgerMenuButton
                  darkBackground={!showSidebarMenu && !whiteBackground}
                  toggle={toggleSideMenu}
                  isChecked={showSidebarMenu}
                />
              </>
            )}
          </li>
        </ul>
        <AsideMenu visible={showSidebarMenu} />
      </Container>
    </nav>
  );
}
