import { HamburgerMenuButton } from "@/components/buttons";
import { Routes } from "@/utils/constants/routes";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AsideMenu from "./AsideMenu";
import Container from "./Container";

type Props = {
  whiteBackground?: boolean;
};

export default function Navbar({ whiteBackground = false }: Props) {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false);

  return (
    <nav
      className={classNames(
        "py-5 border-b  border-opacity-20 relative",
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
                src="/kisalu-logo.png"
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
              href={Routes.becomeProvider}
              className={classNames(
                "animated-underline",
                whiteBackground && "dark"
              )}
            >
              Tornar-se um prestador
            </Link>
          </li>
          <li className="flex items-center gap-7 py-1">
            <Link
              href={Routes.clientRegister}
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
