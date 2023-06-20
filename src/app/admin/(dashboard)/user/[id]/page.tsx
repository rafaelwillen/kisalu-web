import { getSingleAdministrator } from "@/api/admin";
import DangerButton from "@/components/buttons/DangerButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Routes } from "@/utils/constants/routes";
import { cookies } from "next/headers";
import Image from "next/image";
import { notFound } from "next/navigation";
import CategoriesList from "./_components/CategoriesList";

type Props = {
  params: {
    id: string;
  };
};

export const metadata = {
  title: "Página de administrador",
};

export default async function SingleAdminPage({ params }: Props) {
  const { id } = params;
  const token = cookies().get("token")?.value;
  const admin = await getSingleAdministrator(id, token);
  if (!admin) return notFound();
  const {
    avatarImageURL,
    createdCategories,
    disputes,
    firstName,
    lastName,
    gender,
    auth: { createdAt, email, updatedAt },
  } = admin;
  const canBeDeleted = admin.auth.email !== "rafaelpadre@gmail.com";
  const fullName = `${firstName} ${lastName}`;
  const createdAtDate = new Date(createdAt);
  const updatedAtDate = new Date(updatedAt);
  const displayGender = gender === "Female" ? "Feminino" : "Masculino";
  return (
    <main className="space-y-4 py-4">
      <h1 className="text-2xl mb-4">Perfil do Administrador</h1>
      <section className="border border-neutral-200 px-4 py-6 rounded-lg space-y-4 shadow-sm">
        <h2 className="font-bold leading-relaxed">Perfil</h2>
        <div className="flex gap-2 md:gap-8 items-center">
          <Image
            src={avatarImageURL}
            alt={fullName}
            width={100}
            height={100}
            className="rounded-full bg-neutral-200"
          />
          <div className="max-md:text-sm">
            <p>{fullName}</p>
            <p className="text-text-100">{email}</p>
          </div>
        </div>
      </section>
      <section className="border border-neutral-200 px-4 py-6 rounded-lg space-y-4 shadow-sm">
        <h2 className="font-bold leading-relaxed">Informação Pessoal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <p className="text-text-100 leading-tight">Primeiro Nome</p>
            <p>{firstName}</p>
          </div>
          <div>
            <p className="text-text-100 leading-tight">Último Nome</p>
            <p>{lastName}</p>
          </div>
          <div>
            <p className="text-text-100 leading-tight">Email</p>
            <p>{email}</p>
          </div>
          <div>
            <p className="text-text-100 leading-tight">Género</p>
            <p>{displayGender}</p>
          </div>
          <div>
            <p className="text-text-100 leading-tight">Criado em</p>
            <p>{createdAtDate.toLocaleDateString("pt-AO")}</p>
          </div>
          <div>
            <p className="text-text-100 leading-tight">Última edição em</p>
            <p>{updatedAtDate.toLocaleDateString("pt-AO")}</p>
          </div>
        </div>
        <div>{/* TODO: Implement the edit button */}</div>
      </section>
      <CategoriesList
        items={createdCategories.map(({ name, id }) => ({
          name,
          link: Routes.adminSingleCategory(id),
        }))}
      />
      {/* TODO: Disputes section */}
      {/* <section>
        <h2>Disputas Autuadas</h2>
        <p>{numberOfDisputes} disputas</p>
        <div></div>
      </section> */}
      <section>
        <h2 className="font-bold leading-relaxed">Ações</h2>
        <div className="flex flex-col sm:flex-row gap-2 pt-4">
          <DangerButton disabled={!canBeDeleted} fitContent>
            Apagar Utilizador
          </DangerButton>
          <PrimaryButton fitContent>Alterar Palavra-Passe</PrimaryButton>
        </div>
      </section>
    </main>
  );
}
