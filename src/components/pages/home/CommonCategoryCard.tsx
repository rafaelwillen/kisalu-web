import { homeBrowseByCategory } from "@/mock/category";
import { Placeholder } from "@phosphor-icons/react";

type Props = typeof homeBrowseByCategory[0];

export default function CommonCategoryCard({ field, freelancersCount, id, name }: Props) {
  return (
    <div
      key={id}
      className="px-7 py-10 space-y-7 flex-1 border border-neutral-200"
    >
      <div className="relative  inline-block">
        <Placeholder
          size={40}
          className="text-primary-600 relative category-bg-icon "
        />
        <div className="absolute -z-10 -right-3 -bottom-2 bg-primary-100 w-10 h-10 rounded-full" />
      </div>
      <div className="space-y-1">
        <p>
          {new Intl.NumberFormat("pt-AO").format(freelancersCount)} prestadores
        </p>
        <p className="text-lg font-regular min-w-[200px]">{name}</p>
        <p className="text-neutral-500 min-w-[200px]">{field}</p>
      </div>
    </div>
  );
}
