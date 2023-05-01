import MainLayout from "@/components/layouts/MainLayout";
import { NextPageWithLayout } from "@/pages/_app";
import Head from "next/head";

const RegisterPage: NextPageWithLayout = () => {
  return (
    <main className="py-10 lg:py-32">
      <Head>
        <title>Kisalu | Cadastro</title>
      </Head>
      <h1>Registro</h1>
    </main>
  );
};

RegisterPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default RegisterPage;
