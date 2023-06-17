import Container from "@/components/common/Container";
import { trendingService } from "@/mock/projects";
import { randomUUID } from "node:crypto";
import TrendingServiceCard from "./TrendingServiceCard";

// TODO: Fetch data from the API

export default function TrendingServicesList() {
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
      <article className="mt-7 flex overflow-auto gap-2 pb-4 lg:px-5 lg:gap-7 max-lg:snap-x max-lg:snap-mandatory">
        {trendingService.map((service) => (
          <TrendingServiceCard key={randomUUID()} {...service} />
        ))}
      </article>
    </section>
  );
}
