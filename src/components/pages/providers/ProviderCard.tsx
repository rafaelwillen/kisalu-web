import PrimaryButton from "@/components/buttons/PrimaryButton";
import { ReviewStarIcon } from "@/components/elements";
import { useCompactNumberFormatter } from "@/hooks/intl";
import { Routes } from "@/utils/constants/routes";
import { ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

// TODO: Add props

export default function ProviderCard() {
  const formatToCompact = useCompactNumberFormatter();
  return (
    <article className="py-4 px-0 border-b border-neutral-200 rounded lg:border lg:px-16">
      <div className="flex-col flex items-center">
        <Image
          src="https://placehold.co/90.png"
          className="rounded-full mb-2"
          alt="lorem"
          width={90}
          height={90}
        />
        <p className="text-lg font-medium">Lorem, ipsum.</p>
        <div className="flex gap-1 text-sm items-center">
          <ReviewStarIcon />
          <p className="font-medium">4.9</p>
          <p className="text-text-100">({formatToCompact(595)} avaliações)</p>
        </div>
      </div>
      <div className="mt-5 pb-5 border-b border-neutral-300 flex gap-2 items-center justify-center">
         
        {["Figma", "Code", "Culinária"].map((skill, index) => (
          <span
            key={index}
            className="py-1 px-3 bg-primary-200 font-medium rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center text-sm mt-2 mb-4">
        <div className="flex flex-col items-center">
          <p className="font-medium">Localização</p>
          <p>Luanda</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-medium">Taxa de Sucesso</p>
          <p>90%</p>
        </div>
      </div>
      <Link legacyBehavior href={Routes.singleProvider.replace(":id", "lorem")}>
        <PrimaryButton variant="solid">
          Ver Perfil <ArrowUpRight size={20} />
        </PrimaryButton>
      </Link>
    </article>
  );
}
