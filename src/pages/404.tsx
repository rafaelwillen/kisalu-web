import PrimaryButton from "@/components/buttons/PrimaryButton";
import MainLayout from "@/components/layouts/MainLayout";
import { Container } from "@/components/pages/common";
import { NotFoundSVG } from "@/components/svg";
import { Routes } from "@/utils/constants/routes";
import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import { NextPageWithLayout } from "./_app";

const NotFountPage: NextPageWithLayout = () => {
  return (
    <Container>
      <main className="py-10 lg:py-32 flex flex-col lg:flex-row mx-auto max-w-4xl lg:gap-36 lg:items-center">
        <NotFoundSVG
          className="w-3/4 max-w-md self-center lg:max-w-2xl"
          name="404 Not Found"
        />
        <div className="flex flex-col">
          <h1 className="text-5xl text-center font-bold my-5 lg:text-9xl">
            40<span className="text-secondary-700">4</span>
          </h1>
          <p className="text-xl font-bold text-center ">
            Oops! Parece que estás perdido.
          </p>
          <p className="text-center mt-5 lg:text-left">
            A página que estás à procura não existe. Por favor, verifica o URL
            ou volta para a página inicial.
          </p>
          <Link href={Routes.home} className="max-w-md self-center w-full">
            <PrimaryButton>
              Voltar para a página inicial <ArrowUpRight size={20} />
            </PrimaryButton>
          </Link>
        </div>
      </main>
    </Container>
  );
};

NotFountPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default NotFountPage;
