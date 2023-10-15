import { formatToCompactNumber } from "@/utils/intl";
import { Eye } from "lucide-react";
import Image from "next/image";

type Props = {
  user: {
    avatarImageURL: string;
    firstName: string;
    lastName: string;
  };
  viewsCount: number;
  title: string;
};

export default function ServiceProductBanner({
  user: { firstName, lastName, avatarImageURL },
  viewsCount,
  title,
}: Props) {
  return (
    <section className="relative rounded-2xl py-12 px-8 mb-5 text-white lg:px-36 lg:py-24 shadow-lg">
      <div className="space-y-5">
        <h1 className="font-bold text-3xl">{title}</h1>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm font-medium lg:flex lg:gap-8">
          <div className="flex items-center gap-3">
            <Image
              src={avatarImageURL}
              alt={`${firstName} ${lastName}`}
              width={40}
              height={40}
              className="rounded-full bg-white"
            />
            <p>{`${firstName} ${lastName}`}</p>
          </div>
          <div className="flex items-center gap-3">
            <Eye size={30} />
            <p>{formatToCompactNumber(viewsCount)} visualizações</p>
          </div>
        </div>
      </div>
    </section>
  );
}
