"use client";

import { administratorQueryKeys, getAllAdministrators } from "@/api/admin";
import { GetAllAdministratorsResponseBody } from "@/api/types/response";
import { useAuth } from "@/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

type Props = {
  usersInitialData: GetAllAdministratorsResponseBody;
};

export default function UsersList({ usersInitialData }: Props) {
  const { token } = useAuth();
  console.log(administratorQueryKeys);

  const {} = useQuery(
    administratorQueryKeys.getAll,
    () => getAllAdministrators(token),
    {
      initialData: usersInitialData,
    }
  );
  return (
    <>
      <form></form>
      <section>
        <article>
          <Image src="" alt="" width={40} height={40} />
          <div>
            <p>Lorem, ipsum.</p>
            <p>email@gmail.com</p>
          </div>
          <div>
            <p>0 Disputas</p>
            <p>0 Categorias criadas</p>
            <p>Desde 11/01/2000</p>
          </div>
        </article>
      </section>
    </>
  );
}
