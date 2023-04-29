import { trendingService } from "@/mock/projects";
import { ServiceCard } from "../common";

type Props = {
  services: typeof trendingService;
};

export default function TrendingServices({ services }: Props) {
  return (
    <section className="pb-8 border-b border-neutral-300">
      <h2 className="mb-4 text-lg font-medium">Serviços em Destaque</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.slice(0, 3).map((service) => (
          <ServiceCard {...service} key={service.name} />
        ))}
      </ul>
    </section>
  );
}
