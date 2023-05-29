import ReviewStarIcon from "@/components/common/ReviewStarIcon";
import { useCompactNumberFormatter } from "@/hooks/intl";
import { categoriesPageResult } from "@/mock/category";
import { Routes } from "@/utils/constants/routes";
import Image from "next/image";
import Link from "next/link";

type Props = (typeof categoriesPageResult)[0];

export default function CategoryCard({
  meanReview,
  name,
  numFreelancers,
  slug,
}: Props) {
  const formatToCompactNumber = useCompactNumberFormatter();
  const numberOfReviews = (Math.random() * 20 + 1).toFixed(0);
  return (
    <Link
      href={Routes.singleCategory(slug)}
      className="flex gap-4 border-b border-neutral-200 pb-5 lg:flex-col lg:border-0 lg:shadow-lg rounded lg:py-2 hover:scale-105 duration-700 ease-in-out"
    >
      <Image
        src="https://placehold.co/1920x1080.png"
        width={330}
        height={245}
        alt={name}
        className="w-36 h-auto lg:w-full lg:rounded-t"
      />
      <div className="flex flex-col justify-between lg:mx-4 lg:gap-2">
        <h2 className="flex-1 font-medium lg:text-center text-lg">{name}</h2>
        <div className="lg:flex justify-between mb-4">
          <p className="flex items-center gap-1">
            <ReviewStarIcon /> {meanReview}{" "}
            <span className="ml-1 text-text-100">
              {numberOfReviews} {numberOfReviews === "1" ? "nota" : "notas"}{" "}
            </span>
          </p>
          <span>{formatToCompactNumber(numFreelancers)} prestadores</span>
        </div>
      </div>
    </Link>
  );
}
