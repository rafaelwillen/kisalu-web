import { ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function NewProvidersSection() {
  return (
    <section className="flex flex-col relative">
      <div className="flex flex-col items-start max-w-xl">
        <h2 className="font-bold text-2xl lg:text-3xl">
          Gostaria de ter mais clientes e crescer o seu negócio?
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
      </div>
      {/* FIXME: On md screen size this is hiding the text #1 */}
      <Image
        src="/business.jpg"
        className="mt-12 self-center h-60 w-60 object-cover object-left lg:absolute right-0 -bottom-24 lg:h-[520px] lg:w-auto lg:object-center"
        alt="Cadastre como prestador"
        width={492}
        height={520}
      />
    </section>
  );
}
