import MainLayout from "@/components/layouts/MainLayout";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";

const ProviderPage: NextPageWithLayout = () => {
  return (
    <main className="py-10 lg:py-32">
      <Head>
        <title>Kisalu | Perfil Provedor - Lorem, ipsum.</title>
      </Head>
    </main>
  );
};

ProviderPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ProviderPage;
