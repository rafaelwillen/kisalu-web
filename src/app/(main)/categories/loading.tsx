import Container from "@/components/common/Container";
import { v4 as uuid } from "uuid";

const skeletonData = Array.from({ length: 20 }, () => uuid());

export default function CategoriesLoadingPage() {
  return (
    <main className="py-10 lg:py-32">
      <section className="mb-10">
        <Container small>
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">
            Categorias Disponíveis
          </h1>
          <p className="text-justify leading-7">
            Nossa plataforma facilita a navegação e filtragem através de nossa
            extensa seleção de prestadores, permitindo que você encontre o
            profissional certo para o seu projeto de forma rápida e eficiente.
          </p>
        </Container>
      </section>
      <Container small>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7 mb-5">
          {skeletonData.map((id) => (
            <div
              key={id}
              className="flex gap-4 border-b border-neutral-200 pb-5 flex-col lg:border-0 lg:shadow-lg rounded lg:py-2"
            >
              <div className="h-48 w-full lg:rounded-t bg-gray-300 animate-pulse bg-neutral-200"></div>
              <div className="flex flex-col justify-center lg:justify-between lg:mx-4 lg:gap-2">
                <div className="flex-1 h-1 bg-neutral-200 font-medium text-center text-lg animate-pulse"></div>
                <div className="flex justify-between mb-4 text-sm max-lg:flex-col items-center">
                  <div className="animate-pulse h-1 bg-neutral-200"></div>
                  <div className="animate-pulse h-1 bg-neutral-200"></div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </Container>
    </main>
  );
}
