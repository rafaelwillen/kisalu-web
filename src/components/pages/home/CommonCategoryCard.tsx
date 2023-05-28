import { useNumberFormatter } from "@/hooks/intl";
import { Routes } from "@/utils/constants/routes";
import { BoxSelect } from "lucide-react";
import Link from "next/link";

// TODO: Find a way to map the categories to the icons

type Props = {
  id: number | string;
  name: string;
  slug: string;
  field: string;
  freelancersCount: number;
};

export default function CommonCategoryCard({
  field,
  freelancersCount,
  id,
  name,
  slug,
}: Props) {
  const formatNumber = useNumberFormatter();
  return (
    <Link
      href={Routes.singleCategory(slug)}
      key={id}
      className="px-7 py-10 space-y-7 flex-1 border border-neutral-200 lg:border-neutral-50 lg:shadow-lg hover:bg-neutral-200/40 duration-300 cursor-pointer"
    >
      <div className="relative  inline-block">
        <BoxSelect
          size={40}
          className="text-primary-600 relative category-bg-icon "
        />
        <div className="absolute -z-10 -right-3 -bottom-2 bg-primary-100 w-10 h-10 rounded-full" />
      </div>
      <div className="space-y-1">
        <p>{formatNumber(freelancersCount)} prestadores</p>
        <p className="text-lg font-regular min-w-[200px]">{name}</p>
        <p className="text-neutral-500 min-w-[200px]">{field}</p>
      </div>
    </Link>
  );
}
