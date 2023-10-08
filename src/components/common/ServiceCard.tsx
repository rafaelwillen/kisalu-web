import { BaseServiceType } from "@/api/types";
import { Routes } from "@/utils/constants/routes";
import { formatCompactDate, formatToCurrency } from "@/utils/intl";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({
  title,
  bannerImageURL,
  id,
  User: owner,
  minimumPrice,
  publishedDate,
  createdAt,
}: Omit<
  BaseServiceType,
  "state" | "isHighlighted" | "featuredImagesURL" | "description"
>) {
  return (
    <Link
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
          <p>Publicado em: {formatCompactDate(publishedDate ?? createdAt)}</p>
        </div>
      </div>
      <div className="flex justify-between pb-5 lg:mb-5 lg:mx-7 lg:border-t border-neutral-300 lg:pt-4 lg:mt-2">
        <div className="flex gap-2 items-center">
          <Image
            className="rounded-full"
            src={owner.avatarImageURL}
            alt={owner.firstName + " " + owner.lastName}
            width={30}
            height={30}
          />
          <p className="text-sm">{owner.firstName + " " + owner.lastName}</p>
        </div>
        <p className="text-sm text-text-100">
          Começando em <br />
          <span className="text-text-200 font-medium text-base">
            {formatToCurrency(minimumPrice * 100)}
          </span>
        </p>
      </div>
    </Link>
  );
}
