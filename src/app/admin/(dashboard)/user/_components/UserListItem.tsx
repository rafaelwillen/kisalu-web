import { GetAllAdministratorsResponseBody } from "@/api/types/response";
import { Routes } from "@/utils/constants/routes";
import Image from "next/image";
import Link from "next/link";

type Props = {
  user: GetAllAdministratorsResponseBody[number];
};

export default function UserListItem({ user }: Props) {
  const {
    avatarImageURL,
    createdCategories,
    disputes,
    firstName,
    lastName,
    id,
    auth: { createdAt, email },
  } = user;
  const fullName = `${firstName} ${lastName}`;
  const numberOfDisputes = disputes.length;
  const numberOfCreatedCategories = createdCategories.length;
  const createdAtDate = new Date(createdAt);
  return (
    <Link
      href={Routes.adminSingleUser(id)}
      className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-8
    grid-rows-2 p-4 bg-primary-50/50 rounded-xl border border-primary-50/0
     hover:border-primary-200 hover:bg-white duration-300 hover:shadow-2xl  hover:shadow-primary-50"
    >
      <Image
        src={avatarImageURL}
        alt={fullName}
        width={60}
        height={60}
        className="rounded-full bg-white object-cover"
      />
      <div className="self-center">
        <p className="font-bold">{fullName}</p>
        <p className="text-sm">{email}</p>
      </div>
      <div className="col-span-2 gap-1 grid grid-cols-2 text-sm">
        <p className="text-center">{numberOfDisputes} Disputas</p>
        <p className="text-center">{numberOfCreatedCategories} Categorias</p>
        <p className="col-span-2 text-center">
          Desde {createdAtDate.toLocaleDateString("pt-AO")}
        </p>
      </div>
    </Link>
  );
}
