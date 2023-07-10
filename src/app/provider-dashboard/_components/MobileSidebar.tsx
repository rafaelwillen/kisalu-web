import { Routes } from "@/utils/constants/routes";
import classNames from "classnames";
import { XIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  show: boolean;
  onClose: () => void;
};

export default function MobileSidebar({ show, onClose }: Props) {
  return (
    <aside
      className={classNames(
        "absolute inset-0 min-h-screen overflow-hidden z-30 border-b p-8 flex flex-col gap-4 lg:hidden transition-transform ease-in-out duration-300 bg-white",
        show ? "-translate-x-0" : "-translate-x-full"
      )}
    >
      <button onClick={onClose} className="self-end">
        <XIcon />
      </button>
      <nav className="mt-8">
        <ul className="space-y-8">
          <li>
            <Link
              className="block"
              onClick={() => onClose()}
              href={Routes.providerDashboard}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className="block"
              onClick={() => onClose()}
              href={Routes.providerProposals}
            >
              Propostas Recebidas
            </Link>
          </li>
          <li>
            <Link className="block" onClick={() => onClose()} href="#">
              Gerir Serviços
            </Link>
          </li>
          <li>
            <Link className="block" onClick={() => onClose()} href="#">
              Gerir Propostas de Projectos
            </Link>
          </li>
          <li>
            <Link className="block" onClick={() => onClose()} href="#">
              Perfil
            </Link>
          </li>
          <li>
            <Link
              className="block text-danger"
              onClick={() => onClose()}
              href={Routes.logout}
            >
              Finalizar Sessão
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
