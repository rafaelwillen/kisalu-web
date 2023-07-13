import { getAuthenticatedUser } from "@/api/authentication";
import { cookies } from "next/headers";
import PageHeader from "../_components/PageHeader";
import AddressUpdateFormDialog from "./_components/AddressUpdateFormDialog";
import AvatarImage from "./_components/AvatarImage";
import EducationDetails from "./_components/EducationDetails";
import PasswordChangeForm from "./_components/PasswordChangeForm";
import ProfileDetails from "./_components/ProfileDetails";
import WorkAndExperienceDetails from "./_components/WorkAndExperienceDetails";

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
        {user.isActive && (
          <p className="text-danger text-sm mt-4 lg:mt-9">
            A sua conta não está activada. Para activar deve inserir o endereço.{" "}
            <AddressUpdateFormDialog />
          </p>
        )}
        <ProfileDetails user={user} />
      </section>
      <EducationDetails />
      <WorkAndExperienceDetails />
      <PasswordChangeForm />
    </>
  );
}
