import { ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function NewProvidersSection() {
  return (
    <section className="flex flex-col relative">
      <h2 className="font-bold text-2xl">
        Gostaria de ter mais clientes e crescer oo seu negócio?
      </h2>
      <p className="my-5 leading-7">
        Cadastre-se e publique os seus projetos na plataforma para expor o seu
        negócio
      </p>
      <Link
        href="#"
        className="flex justify-center items-center py-4 px-9 gap-2 bg-primary-600 hover:bg-primary-500 duration-300 rounded text-white w-fit"
      >
        Começar <ArrowUpRight size={24} color="#ffffff" weight="thin" />
      </Link>
      <Image
        src="/business.jpg"
        className="mt-12 self-center h-60 w-60 object-cover object-left "
        alt="Cadastre como prestador"
        width={224}
        height={237}
      />
    </section>
  );
}
