import Container from "@/components/common/Container";
import TrendingServiceCard from "./TrendingServiceCard";

export default function TrendingServicesList() {
  const featuredServices: any[] = [];
  return (
    <section>
      <Container small>
        <div className="lg:flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold mb-1">Serviços em destaque</h2>
            <p className="mb-5">Os serviços mais requisitados</p>
          </div>
        </div>
      </Container>
      <article className="mt-7 flex  overflow-auto gap-2 pb-4 lg:px-5 lg:gap-7 max-lg:snap-x max-lg:snap-mandatory">
        {featuredServices.length === 0 && (
          <p className="text-center w-full text-lg">
            Não há serviços em destaque no momento
          </p>
        )}
        {featuredServices.map((service, index) => (
          <TrendingServiceCard key={index} {...service} />
        ))}
      </article>
    </section>
  );
}
