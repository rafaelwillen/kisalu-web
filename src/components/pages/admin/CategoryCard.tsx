import { useCompactNumberFormatter } from "@/hooks/intl";
import { Routes } from "@/utils/constants/routes";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

type Props = {
  imageURL: string;
  name: string;
  numberServices: number;
  numberProjects: number;
  createdBy: string;
};

export default function CategoryCard({
  createdBy,
  imageURL,
  name,
  numberProjects,
  numberServices,
}: Props) {
  const formatter = useCompactNumberFormatter();
  const sluggedName = slugify(name, { lower: true, locale: "pt" });
  return (
    <Link
      href={Routes.adminSingleCategory(sluggedName)}
      className="rounded-md overflow-clip flex flex-col shadow hover:opacity-60 hover:scale-105 duration-300"
    >
      <Image
        src={imageURL}
        alt={name}
        width={330}
        height={185}
        className="object-cover w-full h-auto max-h-[185px] md:w-[330px] md:h-[185px]"
      />
      <div className="p-4 border border-neutral-300">
        <p className="text-center">{name}</p>
        <div className="grid grid-cols-2 gap-2 my-4 text-sm">
          <p className="rounded-full bg-secondary-100 text-center leading-relaxed">
            Serviços: {formatter(numberServices)}
          </p>
          <p className="rounded-full bg-secondary-100 text-center leading-relaxed">
            Projetos: {formatter(numberProjects)}
          </p>
        </div>
        <p className="text-center">
          Criado por <strong>{createdBy}</strong>
        </p>
      </div>
    </Link>
  );
}