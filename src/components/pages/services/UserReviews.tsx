import PrimaryButton from "@/components/buttons/PrimaryButton";
import { ReviewStarIcon } from "@/components/elements";
import { Input } from "@/components/form";
import { ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

// TODO: Add props

export default function UserReviews() {
  return (
    <section className="mt-8">
      <h2 className="font-medium text-xl">Avaliação de Desempenho</h2>
      <p>
        A avaliação de desempenho é feita por outros utilizadores que
        contrataram o prestador.
      </p>
      <article className="flex flex-col py-12 bg-primary-200 rounded-lg items-center mt-4">
        <p className="text-primary-700 font-bold text-6xl">4.96</p>
        <p className="font-medium text-lg">Excelente</p>
        <p>{new Intl.NumberFormat("pt-AO").format(3014)} notas</p>
      </article>
      <article className="mt-5 space-y-2">
        <div className="flex gap-2">
          <p className="font-medium text-sm">5 estrelas</p>
          <progress className="flex-1" max={100} value={58 / 100}></progress>
          <p className="text-sm">58</p>
        </div>
        <div className="flex gap-2">
          <p className="font-medium text-sm">4 estrelas</p>
          <progress className="flex-1" max={100} value={20 / 100}></progress>
          <p className="text-sm">20</p>
        </div>
        <div className="flex gap-2">
          <p className="font-medium text-sm">3 estrelas</p>
          <progress className="flex-1" max={100} value={15 / 100}></progress>
          <p className="text-sm">15</p>
        </div>
        <div className="flex gap-2">
          <p className="font-medium text-sm">2 estrelas</p>
          <progress className="flex-1" max={100} value={2 / 100}></progress>
          <p className="text-sm">2</p>
        </div>
        <div className="flex gap-2">
          <p className="font-medium text-sm">1 estrelas</p>
          <progress className="flex-1" max={100} value={1 / 100}></progress>
          <p className="text-sm">1</p>
        </div>
      </article>
      <article className="mt-8 space-y-8 pb-8 border-b border-neutral-200">
        <div className="space-y-5">
          <div className="flex gap-5 items-center">
            <Image
              src="https://placehold.co/60.png"
              alt="user"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="flex-1">
              <p className="font-medium">Lorem, ipsum.</p>
              <div className="flex gap-5 text-sm">
                <p className="font-medium flex items-center gap-1">
                  <ReviewStarIcon /> 4.98
                </p>
                {/* TODO: Use intl relative time */}
                <p>Publicado Lorem, ipsum.</p>
              </div>
            </div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            eaque excepturi vitae? Dolores harum qui minima impedit voluptates
            blanditiis sint alias quia laborum odio eligendi consectetur atque
            ipsam, sapiente repudiandae.
          </p>
        </div>
        <Link legacyBehavior href="#">
          <PrimaryButton variant="text" fitContent>
            Ver mais <ArrowUpRight />
          </PrimaryButton>
        </Link>
      </article>
      <article>
        <h2>Comentar sobre o serviço</h2>
        <p>O seu endereço de email não será visível</p>
        {/* TODO: Refactor this form */}
        <form>
          {/* TODO: Add star rating */}
          {/* TODO: Implement textarea component */}
          <Input label="Nome" />
          <Input label="Email" type="email" />
          {/* TODO: Add checkbox from radix */}
          <PrimaryButton type="submit">
            Enviar comentário <ArrowUpRight />
          </PrimaryButton>
        </form>
      </article>
    </section>
  );
}
