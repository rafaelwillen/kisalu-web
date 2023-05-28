import { useCurrencyFormatter } from "@/hooks/intl";
import { trendingService } from "@/mock/projects";
import { Routes } from "@/utils/constants/routes";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = (typeof trendingService)[0];

export default function TrendingServiceCard({
  meanReview,
  name,
  numReviews,
  owner,
  imageUrl,
  projectName,
  startingPrice,
}: Props) {
  const formatToCurrency = useCurrencyFormatter();
  return (
    <Link
      href={Routes.singleService(projectName)}
      className="min-w-[300px] snap-center lg:min-w-[350px] flex flex-col rounded-lg shadow-md"
    >
      <div className="relative">
        <Image
          src={imageUrl}
          alt={projectName}
          className="rounded-t-lg h-60 object-cover w-full"
          width={330}
          height={245}
        />
      </div>
      <div className="py-5 px-7 bg-white">
        <p className="text-sm text-text-100">{name}n</p>
        <p className="font-medium text-text-200 max-w-[270px] truncate">
          {projectName}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <Star size={15} color="#e1c03f" />
          <p className="font-medium text-text-200 text-sm">
            {meanReview} <span className="text-text-100">{numReviews} </span>
          </p>
        </div>
        <div className="pt-4 mt-2 border-t border-neutral-200 flex justify-between items-center">
          <div className="flex gap-2 items-center justify-between">
            <div className="relative">
              <Image
                className="rounded-full relative online-dot"
                src={owner.avatarUrl}
                alt={owner.name}
                width={30}
                height={30}
              />
            </div>
            <p className="text-sm">{owner.name}</p>
          </div>
          <p className="text-sm">{formatToCurrency(startingPrice * 500)}</p>
        </div>
      </div>
    </Link>
  );
}
