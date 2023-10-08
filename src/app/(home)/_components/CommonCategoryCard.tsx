import { GetMostPopularCategoriesResponseBody } from "@/api/types/response";
import { Routes } from "@/utils/constants/routes";
import { formatToNumber } from "@/utils/intl";
import Link from "next/link";
import PopularCategoryIconSelector from "./PopularCategoryIconSelector";

type Props = {
  category: GetMostPopularCategoriesResponseBody[number];
};

export default function CommonCategoryCard({ category }: Props) {
  const { name, slug, totalProjects, totalServices } = category;
  return (
    <Link
      href={Routes.singleCategory(slug)}
      className="px-7 py-10 space-y-7 flex-1 border border-neutral-200 lg:border-neutral-50 lg:shadow-lg hover:bg-neutral-200/40 duration-300 cursor-pointer"
    >
      <div className="relative  inline-block">
        <PopularCategoryIconSelector slug={slug} />
        <div className="absolute -z-10 -right-3 -bottom-2 bg-primary-100 w-10 h-10 rounded-full" />
      </div>
      <div className="space-y-1">
        <p className="text-lg font-regular min-w-[200px]">{name}</p>
        <p className="text-neutral-500 min-w-[200px] text-sm">
          {formatToNumber(totalProjects)} projectos
        </p>
        <p className="text-neutral-500 min-w-[200px] text-sm">
          {formatToNumber(totalServices)} serviços
        </p>
      </div>
    </Link>
  );
}
