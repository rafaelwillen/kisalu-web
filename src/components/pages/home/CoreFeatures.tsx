import { useCompactNumberFormatter } from "@/hooks/intl";
import {
  Certificate,
  Laptop,
  Question,
  ShieldChevron,
} from "@phosphor-icons/react";
import { Container } from "../common";

export default function CoreFeatures() {
  const formatToCompactNumber = useCompactNumberFormatter();
  return (
    <section className="mt-10 lg:mt-32">
      <h2 className="font-bold text-2xl text-center mb-12 lg:mb-20 lg:text-3xl">
        Precisa de um serviço feito?
      </h2>
      <Container small>
        <article className="space-y-7 lg:space-y-0 lg:flex gap-16">
          <div>
            <Certificate size={40} className="text-primary-600" />
            <h3 className="mb-4 mt-5 text-lg font-bold">
              Publique um trabalho
            </h3>
            <p className="leading-7">
              É fácil publicar um trabalho. Basta submeter o título, localização
              e a descrição
            </p>
          </div>
          <div>
            <Laptop size={40} className="text-primary-600" />
            <h3 className="mb-4 mt-5 text-lg font-bold">
              Escolha os prestadores
            </h3>
            <p className="leading-7">
              Pode escolher um prestador que chamou a sua atenção sobre os seus
              serviços
            </p>
          </div>
          <div>
            <ShieldChevron size={40} className="text-primary-600" />
            <h3 className="mb-4 mt-5 text-lg font-bold">
              Pagamento de forma segura
            </h3>
            <p className="leading-7">
              O pagamento pelo serviço é feito de forma segura e rápida
            </p>
          </div>
          <div>
            <Question size={40} className="text-primary-600" />
            <h3 className="mb-4 mt-5 text-lg font-bold">
              Estamos aqui para ajudar
            </h3>
            <p className="leading-7">
              Qualquer dúvida, não hesite em nos contactar
            </p>
          </div>
        </article>
      </Container>
      <div className="mx-5 border-t border-b border-neutral-200 mt-8 lg:mt-28">
        <Container small>
          <article className="py-10 grid grid-cols-2 gap-4 lg:flex justify-between">
            <div>
              <p className="font-bold text-4xl mb-1 lg:text-center">
                {formatToCompactNumber(2_000)}
              </p>
              <p className="leading-7">Total de Prestadores</p>
            </div>
            <div>
              <p className="font-bold text-4xl mb-1 lg:text-center">
                {formatToCompactNumber(800)}
              </p>
              <p className="leading-7">Recomendações Positivas</p>
            </div>
            <div>
              <p className="font-bold text-4xl mb-1 lg:text-center">
                {formatToCompactNumber(900)}
              </p>
              <p className="leading-7">Serviços Criados</p>
            </div>
            <div>
              <p className="font-bold text-4xl mb-1 lg:text-center">
                {formatToCompactNumber(700)}
              </p>
              <p className="leading-7">Projetos Completados</p>
            </div>
          </article>
        </Container>
      </div>
    </section>
  );
}
