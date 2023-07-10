import { getAuthenticatedUser } from "@/api/authentication";
import { cookies } from "next/headers";
import PageHeader from "../_components/PageHeader";
import AvatarImage from "./_components/AvatarImage";

export default async function ProviderProfilePage() {
  const token = cookies().get("token")?.value;
  if (!token) throw new Error("No authorization token found");

  const user = await getAuthenticatedUser(token);

  return (
    <>
      <PageHeader pageTitle="O Meu Perfil" pageDescription="" />
      <section className="bg-white p-4 rounded lg:p-8">
        <h2 className="text-lg  font-medium pb-2 lg:pb-5 border-b border-b-neutral-200">
          Detalhes do Perfil
        </h2>
        <div className="mt-6 lg:mt-9">
          <AvatarImage
            currentAvatarImageURL={user.avatarImageURL}
            token={token}
          />
        </div>
      </section>
    </>
  );
}
