import { GetAllPublicCategoriesResponseBody } from "@/api/types/response";
import { Routes } from "@/utils/constants/routes";
import { getPlaceholder } from "@/utils/imagePlaceholder";
import { formatToCompactNumber } from "@/utils/intl";
import Image from "next/image";
import Link from "next/link";

type Props = GetAllPublicCategoriesResponseBody[0];

export default async function CategoryCard({
  availableProjects,
  availableServices,
  mainImageURL,
  slug,
  name,
}: Props) {
  const blurredImageData = await getPlaceholder(mainImageURL);

  return (
    <Link
      href={Routes.singleCategory(slug)}
      className="flex gap-4 border-b border-neutral-200 pb-5 flex-col lg:border-0 lg:shadow-lg rounded lg:py-2 hover:scale-105 duration-700 ease-in-out"
    >
      <Image
        src={mainImageURL}
        width={330}
        height={245}
        blurDataURL={blurredImageData}
        placeholder="blur"
        alt={name}
        className="h-auto w-full lg:rounded-t"
      />
      <div className="flex flex-col justify-center lg:justify-between lg:mx-4 lg:gap-2">
        <h2 className="flex-1 font-medium text-center text-lg">{name}</h2>
        <div className="flex justify-between mb-4 text-sm max-lg:flex-col items-center">
          <p>{formatToCompactNumber(availableProjects)} Projetos Disponíveis</p>
          <p>{formatToCompactNumber(availableServices)} Serviços Disponíveis</p>
        </div>
      </div>
    </Link>
  );
}
