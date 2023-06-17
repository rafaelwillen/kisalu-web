import { getAuthenticatedUser } from "@/api/authentication";
import { cookies } from "next/headers";
import DesktopSidebar from "./Desktop";
import MobileSidebar from "./Mobile";

export default async function Sidebar() {
  const token = cookies().get("token")?.value!;
  const { firstName, lastName, avatarImageURL, email } =
    await getAuthenticatedUser(token);
  const user = {
    email,
    name: `${firstName} ${lastName}`,
    avatarImageURL,
  };

  return (
    <>
      <div className="lg:hidden py-4">
        <MobileSidebar user={user} />
      </div>
      <DesktopSidebar user={user} />
    </>
  );
}
