import { trendingService } from "@/mock/projects";
import { Heart, Star } from "@phosphor-icons/react";
import Image from "next/image";

type Props = typeof trendingService[0];

export default function TrendingServiceCard({
  meanReview,
  name,
  numReviews,
  owner,
  imageUrl,
  projectName,
  startingPrice,
}: Props) {
  function formatToMoney(): string {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "AOA",
    }).format(startingPrice * 500);
  }

  return (
    <div className="min-w-[300px] flex flex-col rounded-lg shadow-md">
      {/* TODO: Replace with Next/Image */}
      {/* TODO: Use real image */}
      <div className="relative">
        <Image
          src={imageUrl}
          alt={projectName}
          className="rounded-t-lg h-60 object-cover"
          width={330}
          height={245}
        />
        <button className="w-9 h-9 flex items-center justify-center rounded-full absolute bg-white shadow-md top-5 right-5 hover:bg-neutral-100 duration-300">
          <Heart />
        </button>
      </div>
      <div className="py-5 px-7 bg-white">
        <p className="text-sm text-text-100">{name}n</p>
        <p className="font-medium text-text-200 max-w-[270px] truncate">
          {projectName}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <Star size={10} color="#e1c03f" weight="fill" />
          <p className="font-medium text-text-200 text-sm">
            {meanReview}{" "}
            <span className="text-text-100">{numReviews} revisões</span>
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
              <div className="w-[9px] h-[9px] bg-[#5BBB7B] rounded-full absolute top-0 right-0"></div>
            </div>
            <p className="text-sm">{owner.name}</p>
          </div>
          <p className="text-sm">{formatToMoney()}</p>
        </div>
      </div>
    </div>
  );
}
