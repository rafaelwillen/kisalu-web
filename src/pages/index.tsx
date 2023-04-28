import { HomeLayout } from "@/components/layouts";
import { Container } from "@/components/pages/common";
import {
  CommonCategoriesList,
  CoreFeatures,
  NewProvidersSection,
} from "@/components/pages/home";
import TrendingServiceList from "@/components/pages/home/TrendingServiceList";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <main>
      <Head>
        <title>Kisalu | Página Inicial</title>
      </Head>
      <Container small>
        <CommonCategoriesList />
      </Container>
      <div className="mt-20 bg-primary-50 py-10 lg:py-28">
        <TrendingServiceList />
      </div>
      <CoreFeatures />
      <div className="mt-28 bg-primary-50 pt-10 lg:mt-64 lg:py-24">
        <Container small>
          <NewProvidersSection />
        </Container>
      </div>
    </main>
  );
};

Home.getLayout = (page) => <HomeLayout>{page}</HomeLayout>;

export default Home;
