"use client";

import { administratorQueryKeys, getAllAdministrators } from "@/api/admin";
import { GetAllAdministratorsResponseBody } from "@/api/types/response";
import { useAuth } from "@/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import UserListItem from "./UserListItem";

type Props = {
  usersInitialData: GetAllAdministratorsResponseBody;
};

export default function UsersList({ usersInitialData }: Props) {
  const { token } = useAuth();

  const { data } = useQuery(
    administratorQueryKeys.getAll,
    () => getAllAdministrators(token),
    {
      initialData: usersInitialData,
    }
  );
  return (
    <>
      {/* TODO: Add the search bar and the sorting field */}
      <form></form>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 mt-8">
        {data.map((admin) => (
          <UserListItem user={admin} />
        ))}
      </section>
    </>
  );
}
