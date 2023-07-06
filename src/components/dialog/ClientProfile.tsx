import { useAuth } from "@/context/AuthContext";
import { Routes } from "@/utils/constants/routes";
import classNames from "classnames";
import { LogOutIcon, SettingsIcon, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DangerButton from "../buttons/DangerButton";

const tabs = [
  {
    name: "profile",
    label: "Perfil",
  },
];

type Props = {
  onClose: () => void;
};

export default function ClientProfile({ onClose }: Props) {
  const auth = useAuth();
  const user = auth.user!;
  const [selectedTab, setSelectedTab] = useState(tabs[0].name);
  const isSelected = (tabName: string) => tabName === selectedTab;
  const formattedPhoneNumber = user.phoneNumber
    ?.split("")
    .map((digit, index) => (index % 3 === 0 ? " " + digit : digit))
    .join("");
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("pt-AO");
  const router = useRouter();

  function logout() {
    router.replace(Routes.logout);
    router.refresh();
    onClose();
  }

  return (
    <div className="grid grid-cols-profile-dialog gap-4">
      <aside className="px-2 py-4">
        <nav>
          <ul className="space-y-4">
            {tabs.map(({ label, name }) => (
              <li key={name}>
                <button
                  onClick={() => setSelectedTab(name)}
                  className={classNames(
                    "text-lg",
                    isSelected(name) ? "text-primary-700" : "text-text-100"
                  )}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <section className="border-l border-neutral-300 px-8 space-y-8">
        <Image
          src={user.avatarImageURL}
          alt={user.firstName}
          width={128}
          height={128}
          className="w-32 h-32 rounded-full bg-white border border-white group-hover:border-neutral-400 duration-200"
        />
        <div>
          <h2 className="flex items-center gap-2 text-lg text-text-100 mb-4">
            <User />
            Detalhes do Utilizador
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="font-bold px-2">Primeiro Nome</p>
              <p className="border border-neutral-400 py-2 px-4 rounded-xl">
                {user.firstName}
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-bold px-2">Último Nome</p>
              <p className="border border-neutral-400 py-2 px-4 rounded-xl">
                {user.lastName}
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-bold px-2">Número de Telefone</p>
              <p className="border border-neutral-400 py-2 px-4 rounded-xl">
                {formattedPhoneNumber}
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-bold px-2">Data de Nascimento</p>
              <p className="border border-neutral-400 py-2 px-4 rounded-xl">
                {formatDate(user.birthDate!)}
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-bold px-2">Sexo</p>
              <p className="border border-neutral-400 py-2 px-4 rounded-xl">
                {user.gender === "Female" ? "Feminino" : "Masculino"}
              </p>
            </div>
          </div>
          <h2 className="text-lg text-text-100 mt-4">Detalhes da Conta</h2>
          <table className="table w-full my-4">
            <thead className="border-b border-neutral-200 ">
              <tr>
                <th className="py-2 font-regular px-1 text-left">Email</th>
                <th className="font-regular px-1">Estado</th>
                <th className="font-regular px-1">Password</th>
                <th className="font-regular px-1">Ação</th>
              </tr>
            </thead>
            <tbody className="text-sm text-text-100">
              <tr className="border-b border-neutral-200">
                <td className="px-1 py-3">{user.email}</td>
                <td className="text-center">
                  {user.isActive ? (
                    <span className="bg-accent-400 border border-accent-200 text-accent-800 px-4 py-px rounded-full">
                      Activo
                    </span>
                  ) : (
                    <span className="bg-danger-400 border border-danger-200 text-danger-800 px-4 py-px rounded-full">
                      Inactivo
                    </span>
                  )}
                </td>
                <td className="text-center">********</td>
                <td className="text-center">
                  <button>
                    <SettingsIcon size={16} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm mb-4">
            Cadastrado desde <span>{formatDate(user.createdAt)}</span>
          </p>
          <div>
            <DangerButton fitContent onClick={logout}>
              Finalizar Sessão
              <LogOutIcon />
            </DangerButton>
          </div>
        </div>
      </section>
    </div>
  );
}
