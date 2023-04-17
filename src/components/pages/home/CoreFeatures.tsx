import {
  Certificate,
  Laptop,
  Question,
  ShieldChevron,
} from "@phosphor-icons/react";

export default function CoreFeatures() {
  return (
    <section className="mt-10">
      <h2 className="font-bold text-2xl text-center mb-12">
        Precisa de um serviço feito?
      </h2>
      <article className="space-y-7">
        <div>
          <Certificate size={40} className="text-primary-600" />
          <h3 className="mb-4 mt-5 text-lg font-bold">Publique um trabalho</h3>
          <p className="leading-7">
            É fácil publicar um trabalho. Basta submeter o título, localização e
            a descrição
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
    </section>
  );
}
