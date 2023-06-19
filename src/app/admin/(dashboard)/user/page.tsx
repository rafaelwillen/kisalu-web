import { Metadata } from "next";
import UsersList from "./_components/UsersList";

export const metadata: Metadata = {
  title: "Página de Administrador",
};

export default function AdminUsersPage() {
  return (
    <main>
      <h1>Administradores da Plataforma</h1>
      <UsersList usersInitialData={[]} />
    </main>
  );
}
