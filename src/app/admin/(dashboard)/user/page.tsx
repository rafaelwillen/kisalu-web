import { getAllAdministrators } from "@/api/admin";
import { Routes } from "@/utils/constants/routes";
import { PlusIcon } from "lucide-react";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import UsersList from "./_components/UsersList";

export const metadata: Metadata = {
  title: "Página de Administrador",
};

export default async function AdminUsersPage() {
  const token = cookies().get("token")?.value;
  const administrators = await getAllAdministrators(token);
  return (
    <main>
      <h1 className="text-2xl">Administradores da Plataforma</h1>
      <UsersList usersInitialData={administrators} />
      <Link
        href={Routes.createAdmin}
        title="Criar administrador"
        className="fixed bottom-4 right-4 bg-primary-500 hover:bg-primary-600 text-white p-4 rounded-full shadow-lg"
      >
        <PlusIcon size={24} />
      </Link>
    </main>
  );
}
