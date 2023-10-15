"use client";

import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

export default function ClientDetails() {
  const { user } = useAuth();

  const fullName = `${user?.firstName} ${user?.lastName}`;

  return (
    <div className="border border-neutral-200 rounded-lg shadow-lg p-8 ">
      <h2 className="font-medium text-center">Dados do Contratante</h2>
      <Image
        src={user?.avatarImageURL!}
        alt={fullName}
        className="rounded-full mx-auto my-5 bg-white border border-neutral-300"
        width={90}
        height={90}
      />
      <p className="font-bold text-xl my-5">
        Nome: <span className="font-regular">{fullName}</span>
      </p>
      <p className="font-bold text-xl my-5">
        Email: <span className="font-regular">{user?.email}</span>
      </p>
      <p className="font-bold text-xl my-5">
        Telefone: <span className="font-regular">{user?.phoneNumber}</span>
      </p>
    </div>
  );
}
