import RegisterLayout from "@/components/layouts/RegisterLayout";
import { Container } from "@/components/pages/common";
import { NextPageWithLayout } from "@/pages/_app";
import Head from "next/head";

const RegisterPage: NextPageWithLayout = () => {
  return (
    <main className="py-10 lg:py-32">
      <Head>
        <title>Kisalu | Cadastro</title>
      </Head>
      <Container small></Container>
    </main>
  );
};

RegisterPage.getLayout = (page) => <RegisterLayout>{page}</RegisterLayout>;

export default RegisterPage;
