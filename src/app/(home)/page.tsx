import Container from "@/components/common/Container";
import { Metadata } from "next";
import CommonCategoriesList from "./_components/CommonCategoriesList";
import CoreFeatures from "./_components/CoreFeatures";
import NewProvidersSection from "./_components/NewProvidersSection";
import TrendingServicesList from "./_components/TrendingServicesList";

export const metadata: Metadata = {
  title: {
    absolute: "Kisalu | Página Inicial",
  },
};

export default function HomePage() {
  return (
    <main>
      <Container small>
        <CommonCategoriesList />
      </Container>
      <div className="mt-20 bg-primary-50 py-10 lg:py-28">
        <TrendingServicesList />
      </div>
      <CoreFeatures />
      <div className="mt-28 bg-primary-50 pt-10 lg:mt-64 lg:py-24">
        <Container small>
          <NewProvidersSection />
        </Container>
      </div>
    </main>
  );
}
