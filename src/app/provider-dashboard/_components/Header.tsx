import { getAuthenticatedUser } from "@/api/authentication";
import { KisaluLogoDark } from "@/assets/images";
import { Routes } from "@/utils/constants/routes";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {
  const token = cookies().get("token")?.value;
  const { avatarImageURL } = await getAuthenticatedUser(token as string);
  return (
    <header className="flex justify-between px-7 py-5">
      <Link
        href={Routes.home}
        className="flex gap-2 items-center select-none text-text-200 text-2xl font-bold"
      >
        <Image src={KisaluLogoDark} alt="Kisalu Logo" />
        Kisalu
      </Link>
      <div>
        <Image
          src={avatarImageURL}
          alt="Avatar do Utilizador"
          width={50}
          height={50}
          className="rounded-full object-cover bg-white shadow-md"
        />
      </div>
    </header>
  );
}
