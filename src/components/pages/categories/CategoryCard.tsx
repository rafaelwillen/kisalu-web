import { categoriesPageResult } from "@/mock/category";
import { Star } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

type Props = (typeof categoriesPageResult)[0];

export default function CategoryCard({
  banner,
  meanReview,
  name,
  numFreelancers,
}: Props) {
  const numberOfReviews = (Math.random() * 20 + 1).toFixed(0);
  return (
    <Link href="" className="flex gap-4 border-b border-neutral-200 pb-5">
      <Image
        src="https://placehold.co/330x245.png"
        width={330}
        height={245}
        alt={name}
        className="w-36 h-auto"
      />
      <div className="flex flex-col justify-between">
        <h2 className="flex-1 font-medium">{name}</h2>
        <div>
          <p className="flex items-center gap-1">
            <Star className="fill-[#E1C03F]" weight="fill" /> {meanReview}{" "}
            <span className="ml-1 text-text-100">
              {numberOfReviews} {numberOfReviews === "1" ? "nota" : "notas"}{" "}
            </span>
          </p>
          <span>
            {new Intl.NumberFormat("pt-AO", {
              notation: "compact",
              compactDisplay: "long",
            }).format(numFreelancers)}{" "}
            prestadores
          </span>
        </div>
      </div>
    </Link>
  );
}
