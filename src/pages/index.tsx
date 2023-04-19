import { Container, Footer } from "@/components/pages/common";
import {
  CommonCategoriesList,
  CoreFeatures,
  Header,
  NewProvidersSection,
} from "@/components/pages/home";
import TrendingServiceList from "@/components/pages/home/TrendingServiceList";
import { DM_Sans } from "next/font/google";

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
      <Container small>
        <CommonCategoriesList />
      </Container>
      <div className="mt-20 bg-primary-50 py-10 lg:py-28">
        <TrendingServiceList />
      </div>
      <CoreFeatures />
      <div className="mt-28 bg-primary-50 pt-10">
        <Container>
          <NewProvidersSection />
        </Container>
      </div>
      <div className="bg-secondary-950 static z-90 py-5">
        <Container>
          <Footer />
        </Container>
      </div>
    </main>
  );
}
