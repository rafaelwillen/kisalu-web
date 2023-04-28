import MainLayout from "@/components/layouts/MainLayout";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const ProviderPage: NextPageWithLayout = () => {
  return (
    <main>
      <Head>
        <title>Kisalu | Os Nossos Prestadores</title>
      </Head>
    </main>
  );
};

ProviderPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ProviderPage;
