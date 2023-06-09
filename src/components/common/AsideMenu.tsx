import { Routes } from "@/utils/constants/routes";
import classNames from "classnames";
import { FolderGit2, Home, ListChecks, User2, UserPlus } from "lucide-react";
import Link from "next/link";
type Props = {
  visible: boolean;
};

export default function AsideMenu({ visible }: Props) {
  return (
    <aside
      data-is-active={visible}
      className={classNames(
        "transition-transform ease-in-out duration-300 lg:hidden bg-white text-text-200 absolute inset-0 min-h-screen overflow-hidden z-10 border-b",
        visible ? "-translate-y-0" : "-translate-y-full"
      )}
    >
      <h3 className="mt-[27px] text-lg font-medium px-5">Menu</h3>
      <ul className="mt-4 pt-2 border-t border-t-text-200">
        <li>
          <Link
            className="h-16 px-5 flex gap-7 items-center hover:bg-primary-300 active:bg-primary-300"
            href={Routes.home}
          >
            <Home size={30} /> Página Inicial
          </Link>
        </li>
        <li>
          <Link
            className="h-16 px-5 flex gap-7 items-center hover:bg-primary-300 active:bg-primary-300"
            href={Routes.categories}
          >
            <ListChecks size={30} /> Categorias
          </Link>
        </li>
        <li>
          <Link
            className="h-16 px-5 flex gap-7 items-center hover:bg-primary-300 active:bg-primary-300"
            href={Routes.providers}
          >
            <User2 size={30} /> Prestadores
          </Link>
        </li>
        <li>
          <Link
            className="h-16 px-5 flex gap-7 items-center hover:bg-primary-300 active:bg-primary-300"
            href={Routes.projects}
          >
            <FolderGit2 size={30} /> Projectos
          </Link>
        </li>
        <li>
          <Link
            className="h-16 px-5 flex gap-7 items-center hover:bg-primary-300 active:bg-primary-300"
            href={Routes.register}
          >
            <UserPlus size={30} /> Criar Conta
          </Link>
        </li>
      </ul>
    </aside>
  );
}
