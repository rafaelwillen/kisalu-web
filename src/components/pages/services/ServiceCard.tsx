import { Star } from "@phosphor-icons/react";
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
  return (
    // TODO: Change this to be a link to the service page
    <article className="space-y-5 border-b border-neutral-200">
      <div className="flex gap-4">
        <Image
          className="w-36 h-28 rounded"
          src={imageUrl}
          alt={projectName}
          width={330}
          height={245}
        />
        <div className="flex-1 flex flex-col gap-3">
          <h2 className="font-medium flex-1">{name}</h2>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <Star className="fill-[#E1C03F]" weight="fill" /> {meanReview}{" "}
            </p>
            <span className="text-text-100">
              {meanReview} {numReviews === 1 ? "nota" : "notas"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between pb-5">
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
            {new Intl.NumberFormat("pt-AO", {
              style: "currency",
              currency: "AOA",
            }).format(startingPrice * 500)}
          </span>
        </p>
      </div>
    </article>
  );
}
