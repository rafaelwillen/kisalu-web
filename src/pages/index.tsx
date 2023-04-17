import { Container } from "@/components/pages/common";
import {
  CommonCategoriesList,
  CoreFeatures,
  Header,
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
      <Container>
        <CommonCategoriesList />
      </Container>
      <div className="mt-20 bg-primary-50 py-10">
        <Container>
          <TrendingServiceList />
        </Container>
      </div>
      <Container>
        <CoreFeatures />
      </Container>
    </main>
  );
}
