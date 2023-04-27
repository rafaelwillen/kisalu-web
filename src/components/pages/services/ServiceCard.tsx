import { ReviewStarIcon } from "@/components/elements";
import { useCurrencyFormatter } from "@/hooks/intl";
import Image from "next/image";
import { ServiceCardProps } from "./types";

export default function ServiceCard({
  imageUrl,
  meanReview,
  name,
  numReviews,
  owner,
  projectName,
  startingPrice,
}: ServiceCardProps) {
  const formatToCurrency = useCurrencyFormatter();
  return (
    // TODO: Change this to be a link to the service page
    <article className="space-y-5 border-b border-neutral-200 lg:flex-col lg:border-0 lg:shadow-lg rounded lg:py-2 group duration-700 ease-in-out hover:scale-105">
      <div className="flex gap-4 lg:flex-col">
        <Image
          className="w-36 h-28 rounded lg:w-full lg:h-60 object-cover object-center rounded-b-none"
          src={imageUrl}
          alt={projectName}
          width={330}
          height={245}
        />
        <div className="flex-1 flex flex-col gap-3 lg:mt-5 lg:mx-7">
          <h2 className="font-medium flex-1 group-hover:text-primary-600 duration-300">
            {name}
          </h2>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <ReviewStarIcon /> {meanReview}{" "}
            </p>
            <span className="text-text-100">
              {numReviews} {numReviews === 1 ? "nota" : "notas"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between pb-5 lg:mb-5 lg:mx-7 lg:border-t border-neutral-300 lg:pt-4 lg:mt-2">
        <div className="flex gap-2 items-center">
          <Image
            className="rounded-full"
            src={owner.avatarUrl}
            alt={owner.name}
            width={30}
            height={30}
          />
          <p className="text-sm">{owner.name}</p>
        </div>
        <p className="text-sm text-text-100">
          Começando em <br />
          <span className="text-text-200 font-medium text-base">
            {formatToCurrency(startingPrice * 500)}
          </span>
        </p>
      </div>
    </article>
  );
}
