import { ReviewStarIcon } from "@/components/elements";
import { Calendar, MapPin } from "@phosphor-icons/react";
import Image from "next/image";

export default function SingleProviderBanner() {
  return (
    <section className="rounded-2xl py-14 md:py-28 md:px-36 px-10 mb-5 text-white shadow-xl bg-providerGradient">
      <div className="flex flex-col max-lg:items-center md:grid grid-cols-[auto,1fr] lg:gap-x-5  max-lg:gap-5 grid-rows-2">
        <Image
          className="rounded-full row-span-2"
          src="https://placehold.co/120.png"
          width={120}
          height={120}
          alt="Lorem ipsum profile picture"
        />
        <h1 className="font-bold text-xl">Lorem, ipsum.</h1>
        <ul className="flex items-center gap-5 text-sm flex-col md:flex-row">
          <li className="flex items-center gap-2">
            <ReviewStarIcon />
            <p className="font-medium">4.82</p>
            <p>94 avaliações</p>
          </li>
          <li className="flex items-center gap-2">
            <MapPin />
            Rangel, Luanda
          </li>
          <li className="flex items-center gap-2">
            <Calendar />
            Membro desde {new Date().toLocaleDateString()}
          </li>
        </ul>
      </div>
    </section>
  );
}
