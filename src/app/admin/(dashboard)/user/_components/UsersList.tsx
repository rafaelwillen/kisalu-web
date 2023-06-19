"use client";

import Image from "next/image";

type Props = {
  usersInitialData: any[];
};

export default function UsersList({ usersInitialData }: Props) {
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
