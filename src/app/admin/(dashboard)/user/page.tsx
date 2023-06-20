import { getAllAdministrators } from "@/api/admin";
import { Metadata } from "next";
import { cookies } from "next/headers";
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
    </main>
  );
}
