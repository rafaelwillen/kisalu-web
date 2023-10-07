import Container from "@/components/common/Container";
import { Metadata } from "next";
import { Suspense } from "react";
import PopularCategories from "./_components/CommonCategoriesList";
import CoreFeatures from "./_components/CoreFeatures";
import NewProvidersSection from "./_components/NewProvidersSection";
import PopularCategoriesLoadingState from "./_components/PopularCategoriesLoadingState";

export const metadata: Metadata = {
  title: {
    absolute: "Kisalu | Página Inicial",
  },
};

export default function HomePage() {
  return (
    <main>
      <Container small>
        <Suspense fallback={<PopularCategoriesLoadingState />}>
          <PopularCategories />
        </Suspense>
      </Container>
      <CoreFeatures />
      <div className="mt-28 bg-primary-50 pt-10 lg:mt-64 lg:py-24">
        <Container small>
          <NewProvidersSection />
        </Container>
      </div>
    </main>
  );
}
