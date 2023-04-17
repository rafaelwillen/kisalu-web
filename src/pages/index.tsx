import { Container } from "@/components/pages/common";
import {
  CommonCategoriesList,
  Header,
  TrendingServiceCard,
} from "@/components/pages/home";
import { trendingService } from "@/mock/projects";
import { DM_Sans } from "next/font/google";
import Link from "next/link";

// TODO: Need to find a better place for this. Probably create a layout component
const mainFont = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-main",
});

export default function Home() {
  return (
    <main className={`${mainFont.variable} font-main`}>
      <Header />
      <Container>
        <CommonCategoriesList />
      </Container>
      <div className="mt-20 bg-primary-50 py-10">
        <Container>
          <section>
            <h2 className="text-3xl font-bold mb-1">Serviços em destaque</h2>
            <p className="mb-5">Os serviços mais requisitados</p>
            {/* TODO: Replace with actual link */}
            <Link href="#" className="font-bold">
              Todos os serviços →
            </Link>
            <article className="mt-7 flex overflow-auto gap-2 pb-4">
              {trendingService.map((service) => (
                <TrendingServiceCard {...service} />
              ))}
            </article>
          </section>
        </Container>
      </div>
    </main>
  );
}
