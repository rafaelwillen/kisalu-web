import { BaseReviewType } from "@/api/types";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Routes } from "@/utils/constants/routes";
import {
  formatToCompactNumber,
  formatToNumber,
  formatToRelativeDate,
} from "@/utils/intl";
import {
  calculateMeanReviews,
  getReviewNote,
  groupReviews,
} from "@/utils/reviews";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReviewForm from "../forms/ReviewForm";
import ProgressBar from "./ProgressBar";
import ReviewStarIcon from "./ReviewStarIcon";

// TODO: Add props
type Props = {
  showLinkToService?: boolean;
  reviews: BaseReviewType[];
};

export default function UserReviews({
  showLinkToService = false,
  reviews,
}: Props) {
  const ratings = reviews.map(({ rating }) => rating);
  return (
    <section className="mt-8">
      <h2 className="font-medium text-xl">Avaliação de Desempenho</h2>
      <p>
        A avaliação de desempenho é feita por outros utilizadores que
        contrataram o prestador.
      </p>
      <div className="md:flex gap-5">
        <article className="flex flex-1 flex-col py-12 bg-primary-200 rounded-lg items-center mt-4">
          <p className="text-primary-700 font-bold text-6xl">
            {calculateMeanReviews(ratings)}
          </p>
          <p className="font-medium text-lg">{getReviewNote(0)}</p>
          <p>{formatToNumber(ratings.length)} notas</p>
        </article>
        <article className="mt-5 flex-[2] space-y-2">
          {groupReviews(ratings).map(([value, count], index) => (
            <div
              key={index}
              className="grid grid-cols-[20%,auto,10%] gap-2 items-center"
            >
              <p className="font-medium text-sm">{value} estrelas</p>
              <ProgressBar
                progress={(count / groupReviews.length) * 100}
                max={100}
              />
              <p className="text-sm">{formatToCompactNumber(count)}</p>
            </div>
          ))}
        </article>
      </div>
      <article className="mt-8 space-y-8 pb-8 border-b border-neutral-200">
        {reviews.map(({ client, commentary, id, rating }) => (
          <div key={id} className="space-y-5">
            <div className="flex gap-5 items-center">
              <Image
                src={client.avatarImageURL}
                alt={`${client.firstName} ${client.lastName}`}
                width={60}
                height={60}
                className="rounded-full bg-white"
              />
              <div className="flex-1">
                <p className="font-medium">{`${client.firstName} ${client.lastName}`}</p>
                <div className="flex gap-5 text-sm">
                  <p className="font-medium flex items-center gap-1">
                    <ReviewStarIcon /> {rating}
                  </p>
                  <p>Publicado {formatToRelativeDate(new Date(2022, 8, 10))}</p>
                </div>
              </div>
            </div>
            <p>{commentary}</p>
            {showLinkToService && (
              <p className="mt-2">
                Serviço referido -{" "}
                <Link
                  className=" animated-underline text-primary-700"
                  href={Routes.singleService("lorem")}
                >
                  Lorem, ipsum dolor.
                </Link>
              </p>
            )}
          </div>
        ))}
        {reviews.length !== 0 && (
          <Link legacyBehavior href="#">
            <PrimaryButton variant="text" fitContent>
              Ver mais <ArrowUpRight />
            </PrimaryButton>
          </Link>
        )}
      </article>
      <article className="mt-8">
        <h2 className="text-xl font-medium mb-5">Comentar sobre o serviço</h2>
        <p>
          O seu endereço de email não será visível. Campos obrigatórios estão
          marcados com *
        </p>
        <ReviewForm />
      </article>
    </section>
  );
}
