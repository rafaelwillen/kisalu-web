import { Routes } from "@/utils/constants/routes";
import Image from "next/image";
import Link from "next/link";

type Props = {
  services: {
    id: string;
    title: string;
    description: string;
    bannerImageURL: string;
    viewsCount: number;
  }[];
  providerId: string;
};

export default function TrendingServices({ services, providerId }: Props) {
  return (
    <section className="pb-8 border-b border-neutral-300">
      <h2 className="mb-4 text-lg font-medium">Serviços em Destaque</h2>
      {services.length !== 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ id, bannerImageURL, title }) => (
            <Link
              key={id}
              href={Routes.singleService(id)}
              className="space-y-5 border-b border-neutral-200 lg:flex-col lg:border-0 lg:shadow-lg rounded lg:py-2 group duration-700 ease-in-out hover:-translate-y-2"
            >
              <div className="flex gap-4 lg:flex-col">
                {bannerImageURL && (
                  <Image
                    className="w-36 h-28 rounded lg:w-full lg:h-60 object-cover object-center rounded-b-none"
                    src={bannerImageURL}
                    alt={title}
                    width={330}
                    height={245}
                  />
                )}
                <div className="flex-1 flex flex-col gap-3 lg:mt-5 lg:mx-7">
                  <h2 className="font-medium flex-1 group-hover:text-primary-600 duration-300">
                    {title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      ) : (
        <p>Nenhum serviço em destaque :(</p>
      )}
      <Link
        href={Routes.servicesFromProvider(providerId)}
        className="text-primary-600 underline mt-4 block"
      >
        Ver todos os serviços
      </Link>
    </section>
  );
}
