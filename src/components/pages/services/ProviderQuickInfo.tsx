import PrimaryButton from "@/components/buttons/PrimaryButton";
import { ReviewStarIcon } from "@/components/elements";
import { Routes } from "@/utils/constants/routes";
import { ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

// TODO: Add props

export default function ProviderQuickInfo() {
  return (
    <section className="border border-neutral-200 rounded-lg bg-white shadow-lg p-8 mt-7 md:flex-1 md:mt-0 xl:w-1/2 xl:mx-auto">
      <h2 className="font-medium text-xl">Sobre o prestador</h2>
      <article className="flex gap-5 items-center mt-8">
        <Image
          src="https://placehold.co/90.png"
          alt="User"
          width={90}
          height={90}
          className="rounded-full"
        />
        <div className="flex-1">
          <p className="text-lg font-medium">Robert Fox</p>
          <div className="flex gap-1 text-sm">
            <ReviewStarIcon />
            <p className="font-medium">4.9</p>
            <p className="text-text-100">(595 notas)</p>
          </div>
        </div>
      </article>
      <article className="flex justify-between items-center mt-5 pt-5 border-t border-neutral-200">
        <div className="space-y-1">
          <p className="font-medium">Localização</p>
          <p>Luanda, Rangel</p>
        </div>
        <div className="space-y-1">
          <p className="font-medium">Taxa de Sucesso</p>
          <p>98%</p>
        </div>
      </article>
      {/* TODO: Go to provider page */}
      <Link
        href={Routes.singleProvider.replace(":id", "lorem 2")}
        legacyBehavior
      >
        <PrimaryButton variant="outline">
          Contactar-me
          <ArrowUpRight />
        </PrimaryButton>
      </Link>
    </section>
  );
}
