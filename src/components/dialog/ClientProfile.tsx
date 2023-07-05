"use client";

import classNames from "classnames";
import { LogOutIcon, SettingsIcon, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import DangerButton from "../buttons/DangerButton";

const tabs = [
  {
    name: "profile",
    label: "Perfil",
  },
];

export default function ClientProfile() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].name);
  const isSelected = (tabName: string) => tabName === selectedTab;

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
          src="https://api.dicebear.com/6.x/notionists/png/seed=AnaSilva"
          alt=""
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
                Ana
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-bold px-2">Último Nome</p>
              <p className="border border-neutral-400 py-2 px-4 rounded-xl">
                Silva
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-bold px-2">Número de Telefone</p>
              <p className="border border-neutral-400 py-2 px-4 rounded-xl">
                924 215 333
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-bold px-2">Data de Nascimento</p>
              <p className="border border-neutral-400 py-2 px-4 rounded-xl">
                12/12/1999
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-bold px-2">Sexo</p>
              <p className="border border-neutral-400 py-2 px-4 rounded-xl">
                Feminino
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
                <td className="px-1 py-3">ana.silva@example.com</td>
                <td className="text-center">
                  <span className="bg-accent-400 border border-accent-200 text-accent-800 px-4 py-px rounded-full">
                    Activo
                  </span>
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
            Cadastrado desde <span>10/10/2021</span>
          </p>
          <div>
            <DangerButton fitContent>
              Finalizar Sessão
              <LogOutIcon />
            </DangerButton>
          </div>
        </div>
      </section>
    </div>
  );
}
