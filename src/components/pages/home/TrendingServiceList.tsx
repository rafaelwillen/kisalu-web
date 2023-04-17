import { trendingService } from "@/mock/projects";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import TrendingServiceCard from "./TrendingServiceCard";

export default function TrendingServiceList() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-1">Serviços em destaque</h2>
      <p className="mb-5">Os serviços mais requisitados</p>
      {/* TODO: Replace with actual link */}
      <Link href="#" className="font-bold">
        Todos os serviços →
      </Link>
      <article className="mt-7 flex overflow-auto gap-2 pb-4">
        {trendingService.map((service) => (
          <TrendingServiceCard key={uuid()} {...service} />
        ))}
      </article>
    </section>
  );
}
