import { trendingService } from "@/mock/projects";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import { Container } from "../common";
import TrendingServiceCard from "./TrendingServiceCard";

export default function TrendingServiceList() {
  return (
    <section>
      <Container small>
        <div className="lg:flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold mb-1">Serviços em destaque</h2>
            <p className="mb-5">Os serviços mais requisitados</p>
          </div>
          {/* TODO: Replace with actual link */}
          <Link href="#" className="font-bold group flex items-center gap-2">
            Todos os serviços{" "}
            <ArrowRight className="group-hover:translate-x-2 duration-300" />
          </Link>
        </div>
      </Container>
      <article className="mt-7 flex overflow-auto gap-2 pb-4 lg:px-5 lg:gap-7">
        {trendingService.map((service) => (
          <TrendingServiceCard key={uuid()} {...service} />
        ))}
      </article>
    </section>
  );
}
