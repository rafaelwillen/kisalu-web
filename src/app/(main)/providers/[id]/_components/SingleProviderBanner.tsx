import ReviewStarIcon from "@/components/common/ReviewStarIcon";
import { formatToCompactNumber } from "@/utils/intl";
import { Calendar, MapPin, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  avatarImageURL: string;
  fullName: string;
  meanReview: number;
  numberOfReviews: number;
  address: {
    county: string;
    province: string;
  };
  createdAt: Date;
};

export default function SingleProviderBanner({
  avatarImageURL,
  fullName,
  meanReview,
  numberOfReviews,
  address: { county, province },
  createdAt,
}: Props) {
  return (
    <section className="rounded-2xl relative py-14 md:py-28 md:px-36 px-5 mb-5 text-white shadow-xl bg-providerGradient">
      <Link
        href="#"
        className="xl:hidden bg-primary-500 p-4 absolute rounded-full -top-5 right-5 shadow-xl"
      >
        <Send name="Contactar-me" size={30} />
      </Link>
      <div className="flex flex-col max-lg:items-center md:grid grid-cols-[auto,1fr] lg:gap-x-5  max-lg:gap-5 grid-rows-2">
        <Image
          className="rounded-full row-span-2 bg-white"
          src={avatarImageURL}
          width={120}
          height={120}
          alt={fullName}
        />
        <h1 className="font-bold text-xl md:self-end">{fullName}</h1>
        <ul className="flex items-center gap-5 text-sm flex-col md:flex-row">
          <li className="flex items-center gap-2">
            <ReviewStarIcon />
            <p className="font-medium">{meanReview}</p>
            <p>{formatToCompactNumber(numberOfReviews)} avaliações</p>
          </li>
          <li className="flex items-center gap-2 xl:hidden">
            <MapPin />
            {county}, {province}
          </li>
          <li className="flex items-center gap-2 xl:hidden">
            <Calendar />
            Membro desde{" "}
            {createdAt.toLocaleDateString("pt-AO", {
              month: "long",
              year: "numeric",
            })}
          </li>
        </ul>
      </div>
    </section>
  );
}
