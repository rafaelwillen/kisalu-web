import { ReviewStarIcon } from "@/components/elements";
import {
  useCompactNumberFormatter,
  useRelativeTimeFormatter,
} from "@/hooks/intl";
import { Calendar, MapPin, PaperPlaneTilt } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function SingleProviderBanner() {
  const formatToCompact = useCompactNumberFormatter();
  const formatRelativeDate = useRelativeTimeFormatter();
  return (
    <section className="rounded-2xl relative py-14 md:py-28 md:px-36 px-5 mb-5 text-white shadow-xl bg-providerGradient">
      <Link
        href="#"
        className="xl:hidden bg-primary-500 p-4 absolute rounded-full -top-5 right-5 shadow-xl"
      >
        <PaperPlaneTilt name="Contactar-me" size={30} />
      </Link>
      <div className="flex flex-col max-lg:items-center md:grid grid-cols-[auto,1fr] lg:gap-x-5  max-lg:gap-5 grid-rows-2">
        <Image
          className="rounded-full row-span-2"
          src="https://placehold.co/120.png"
          width={120}
          height={120}
          alt="Lorem ipsum profile picture"
        />
        <h1 className="font-bold text-xl md:self-end">Lorem, ipsum.</h1>
        <ul className="flex items-center gap-5 text-sm flex-col md:flex-row">
          <li className="flex items-center gap-2">
            <ReviewStarIcon />
            <p className="font-medium">4.82</p>
            <p>{formatToCompact(98)} avaliações</p>
          </li>
          <li className="flex items-center gap-2 xl:hidden">
            <MapPin />
            Rangel, Luanda
          </li>
          <li className="flex items-center gap-2 xl:hidden">
            <Calendar />
            Membro desde{" "}
            {new Date().toLocaleDateString("pt-AO", {
              month: "long",
              year: "numeric",
            })}
          </li>
        </ul>
      </div>
    </section>
  );
}
