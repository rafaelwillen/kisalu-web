import { BaseAddressType } from "@/api/types";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Routes } from "@/utils/constants/routes";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// TODO: Add props
type Props = {
  firstName: string;
  lastName: string;
  address?: BaseAddressType;
  successRate: number;
  id: string;
  avatarImageURL: string;
};

export default function ProviderQuickInfo({
  address,
  firstName,
  id,
  lastName,
  successRate = 0,
  avatarImageURL,
}: Props) {
  const fullName = `${firstName} ${lastName}`;
  return (
    <section className="border border-neutral-200 rounded-lg bg-white shadow-lg p-8 mt-7 md:flex-1 md:mt-0 xl:w-1/2 xl:mx-auto">
      <h2 className="font-medium text-xl">Sobre o prestador</h2>
      <article className="flex gap-5 items-center mt-8">
        <Image
          src={avatarImageURL}
          alt={fullName}
          width={90}
          height={90}
          className="rounded-full"
        />
        <div className="flex-1">
          <p className="text-lg font-medium">{fullName}</p>
        </div>
      </article>
      <article className="flex justify-between items-center my-5 pt-5 border-t border-neutral-200">
        <div className="space-y-1">
          <p className="font-medium">Localização</p>
          {address ? (
            <p>
              {address?.province}, {address?.county}
            </p>
          ) : (
            <p>Não definido</p>
          )}
        </div>
        <div className="space-y-1">
          <p className="font-medium">Taxa de Sucesso</p>
          <p>{successRate * 100}%</p>
        </div>
      </article>
      <Link href={Routes.singleProvider(id)} legacyBehavior>
        <PrimaryButton variant="outline">
          Contactar-me
          <ArrowUpRight />
        </PrimaryButton>
      </Link>
    </section>
  );
}
