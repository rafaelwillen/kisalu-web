import { BaseProviderType } from "@/api/types";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import ReviewStarIcon from "@/components/common/ReviewStarIcon";
import { Routes } from "@/utils/constants/routes";
import { formatToCompactNumber } from "@/utils/intl";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  provider: BaseProviderType;
};

export default function ProviderCard({ provider }: Props) {
  const fullName = `${provider.firstName} ${provider.lastName}`;
  // const meanReview = provider.reviews.reduce((acc, curr) => acc + curr.)
  return (
    <article className="py-4 px-0 border-b border-neutral-200 rounded lg:border lg:px-16">
      <div className="flex-col flex items-center">
        <Image
          src={provider.avatarImageURL}
          className="rounded-full mb-2 bg-white shadow"
          alt={fullName}
          width={90}
          height={90}
        />
        <p className="text-lg font-medium">{fullName}</p>
        <div className="flex gap-1 text-sm items-center">
          <ReviewStarIcon />
          <p className="font-medium">{}</p>
          <p className="text-text-100">
            ({formatToCompactNumber(595)} avaliações)
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm mt-2 mb-4">
        <div className="flex flex-col items-center">
          <p className="font-medium">Localização</p>
          <p>{provider.address?.province}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-medium">Taxa de Sucesso</p>
          <p>{0}</p>
        </div>
      </div>
      <Link legacyBehavior href={Routes.singleProvider(provider.id)}>
        <PrimaryButton variant="solid">
          Ver Perfil <ArrowUpRight size={20} />
        </PrimaryButton>
      </Link>
    </article>
  );
}
