"use client";

import useToggle from "@/hooks/useToggle";
import { Routes } from "@/utils/constants/routes";
import classNames from "classnames";
import {
  FileStackIcon,
  FolderKanbanIcon,
  GanttChartSquareIcon,
  HomeIcon,
  LogOutIcon,
  PanelLeftOpenIcon,
  PanelRightOpenIcon,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import MobileSidebar from "./MobileSidebar";
import ShowSidebarMenu from "./ShowSidebarMenu";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { toggle, isOpen } = useToggle();
  const mobileSidebarController = useToggle();

  const sidebarSizeClassName = isOpen ? "pr-32" : "pr-8";

  return (
    <>
      <ShowSidebarMenu onClick={mobileSidebarController.open} />
      <MobileSidebar
        show={mobileSidebarController.isOpen}
        onClose={mobileSidebarController.close}
      />
      <aside
        className={classNames(
          "mt-1",
          isOpen ? "mr-7" : "mr-0",
          "hidden lg:block"
        )}
      >
        <button className="ml-8 text-text-100 mb-4" onClick={() => toggle()}>
          {isOpen ? (
            <PanelRightOpenIcon size={20} />
          ) : (
            <PanelLeftOpenIcon size={20} />
          )}
        </button>
        <p
          className={classNames(
            "text-text-100 text-sm ml-7 mb-4",
            !isOpen && "hidden"
          )}
        >
          Início
        </p>
        <nav>
          <ul>
            <li>
              <Link
                href={Routes.providerDashboard}
                className={classNames(
                  "flex gap-4 items-center pl-8 py-4 rounded-r-md duration-300 hover:bg-accent-200",
                  pathname === Routes.providerDashboard &&
                    "bg-accent-500 text-white hover:bg-accent-500 hover:brightness-110",
                  sidebarSizeClassName
                )}
              >
                <HomeIcon size={20} />
                {isOpen && "Dashboard"}
              </Link>
            </li>
            <li>
              <Link
                href={Routes.providerProposals}
                className={classNames(
                  "flex gap-4 items-center pl-8 py-4 rounded-r-md duration-300 hover:bg-accent-200",
                  pathname === Routes.providerProposals &&
                    "bg-accent-500 text-white hover:brightness-110",
                  sidebarSizeClassName
                )}
              >
                <FileStackIcon size={20} />
                {isOpen && "Propostas Recebidas"}
              </Link>
            </li>
          </ul>
        </nav>
        <p
          className={classNames(
            "text-text-100 text-sm ml-7 my-4",
            !isOpen && "hidden"
          )}
        >
          Gerir
        </p>
        <nav>
          <ul>
            <li>
              <Link
                href={Routes.providerServices}
                className={classNames(
                  "flex gap-4 items-center pl-8 py-4 rounded-r-md duration-300 hover:bg-accent-200",
                  pathname === "" &&
                    "bg-accent-500 text-white hover:brightness-110",
                  sidebarSizeClassName
                )}
              >
                <FolderKanbanIcon size={20} />
                {isOpen && "Serviços"}
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={classNames(
                  "flex gap-4 items-center pl-8 py-4 rounded-r-md duration-300 hover:bg-accent-200",
                  pathname === "" &&
                    "bg-accent-500 text-white hover:brightness-110",
                  sidebarSizeClassName
                )}
              >
                <GanttChartSquareIcon size={20} />
                {isOpen && "Propostas de Projectos"}
              </Link>
            </li>
          </ul>
        </nav>
        <p
          className={classNames(
            "text-text-100 text-sm ml-7 my-4",
            !isOpen && "hidden"
          )}
        >
          {isOpen && "Conta"}
        </p>
        <nav>
          <ul>
            <li>
              <Link
                href={Routes.providerProfile}
                className={classNames(
                  "flex gap-4 items-center pl-8 py-4 rounded-r-md duration-300 hover:bg-accent-200",
                  pathname === "" &&
                    "bg-accent-500 text-white hover:brightness-110",
                  sidebarSizeClassName
                )}
              >
                <User2Icon size={20} />
                {isOpen && "Perfil"}
              </Link>
            </li>
            <li>
              <button
                onClick={() => router.replace(Routes.logout)}
                className={classNames(
                  "flex gap-4 items-center pl-8 py-4 rounded-r-md duration-300 hover:bg-danger hover:text-white",
                  sidebarSizeClassName
                )}
              >
                <LogOutIcon size={20} />
                {isOpen && "Finalizar Sessão"}
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
