import Container from "@/components/common/Container";
import UserReviews from "@/components/common/UserReviews";
import { trendingService } from "@/mock/projects";
import { Routes } from "@/utils/constants/routes";
import { Metadata } from "next";
import Link from "next/link";
import BasicPortfolio from "./_components/BasicPortfolio";
import ProviderDescription from "./_components/ProviderDescription";
import QuickInfo from "./_components/QuickInfo";
import SingleProviderBanner from "./_components/SingleProviderBanner";
import Skills from "./_components/Skills";
import TrendingServices from "./_components/StaredServices";

type PageProps = {
  params: {
    username: string;
  };
};

// TODO: Add metadata
export const metadata: Metadata = {
  title: "",
};

export default function ProviderProfilePage({
  params: { username },
}: PageProps) {
  console.log(username);

  return (
    <main className="py-10 lg:pt-0">
      <Container small>
        <section className="space-x-2 my-5 hidden lg:block text-text-200/60">
          <Link className="animated-underline dark" href={Routes.home}>
            Página Inicial
          </Link>
          <span>/</span>
          <Link className="animated-underline dark" href={Routes.providers}>
            Prestadores
          </Link>
          <span>/</span>
          <Link className="animated-underline dark text-text-200" href="#">
            Lorem, ipsum.
          </Link>
        </section>
        <SingleProviderBanner />
        <div className="block xl:hidden">
          <QuickInfo />
          <ProviderDescription />
          <Skills />
          <BasicPortfolio />
          <TrendingServices services={trendingService} />
          <UserReviews showLinkToService />
        </div>
        <div className="hidden xl:grid grid-cols-[auto,35%] gap-8">
          <div>
            <QuickInfo />
            <ProviderDescription />
            <BasicPortfolio />
            <TrendingServices services={trendingService} />
            <UserReviews showLinkToService />
          </div>
          <aside className="-mt-16 z-20 mr-9 space-y-4">
            {/* <ContactMe /> */}
            <Skills />
          </aside>
        </div>
      </Container>
    </main>
  );
}
