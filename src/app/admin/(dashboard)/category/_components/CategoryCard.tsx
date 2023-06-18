import { Routes } from "@/utils/constants/routes";
import { formatToCompactNumber } from "@/utils/intl";
import Image from "next/image";
import Link from "next/link";

type Props = {
  imageURL: string;
  name: string;
  numberServices: number;
  numberProjects: number;
  createdBy: string;
  id: string;
  createdAt: string | Date;
};

export default function CategoryCard({
  createdBy,
  imageURL,
  name,
  numberProjects,
  numberServices,
  id,
  createdAt,
}: Props) {
  const categoryDateCreation = new Date(createdAt);
  return (
    <Link
      href={Routes.adminSingleCategory(id)}
      className="rounded-md overflow-clip flex flex-col shadow hover:opacity-60 duration-300"
    >
      <Image
        src={imageURL}
        alt={name}
        width={330}
        height={185}
        className="object-cover w-auto max-h-[185px] md:w-[330px] md:h-[185px]"
      />
      <div className="p-4 border border-neutral-300">
        <p className="text-center">{name}</p>
        <div className="grid grid-cols-2 gap-2 my-4 text-sm">
          <p className="rounded-full bg-secondary-100 text-center leading-relaxed">
            Serviços: {formatToCompactNumber(numberServices)}
          </p>
          <p className="rounded-full bg-secondary-100 text-center leading-relaxed">
            Projetos: {formatToCompactNumber(numberProjects)}
          </p>
        </div>
        <p className="text-center text-sm">
          Criado por <strong>{createdBy}</strong> em{" "}
          {categoryDateCreation.toLocaleDateString("pt-AO", {
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </Link>
  );
}
