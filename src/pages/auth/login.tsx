import MainLayout from "@/components/layouts/MainLayout";
import { Container } from "@/components/pages/common";
import { Routes } from "@/utils/constants/linksPaths";
import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import { NextPageWithLayout } from "../_app";

const LoginPage: NextPageWithLayout = () => {
  return (
    <main className="bg-secondary-100 py-10 lg:py-32">
      <Container>
        <section className="mx-auto max-w-2xl space-y-14">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Iniciar Sessão</h1>
            <p>
              Olá! Bem-vindo de volta. Por favor, faça login para acessar a sua
              conta.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Haha, you can't login yet! :D");
            }}
            className="bg-white rounded p-12"
          >
            {/* TODO: Refactor to component */}
            <div className="flex-1 space-y-1">
              <label htmlFor="email" className="text-sm font-medium leading-7">
                Endereço de Email
              </label>
              <div className="p-2 border border-neutral-200 rounded flex focus-within:border-primary-400 duration-150">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="flex-1 outline-none "
                />
              </div>
            </div>
            <div className="my-3" />
            {/* TODO: Refactor to component */}
            <div className="flex-1 space-y-1">
              <label
                htmlFor="password"
                className="text-sm font-medium leading-7"
              >
                Palavra Passe
              </label>
              <div className="p-2 border border-neutral-200 rounded flex focus-within:border-primary-400 duration-150">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="flex-1 outline-none "
                />
              </div>
            </div>
            <p className="my-7">
              Não possui uma conta?{" "}
              <Link
                className="animated-underline primary text-primary-600"
                href={Routes.register}
              >
                Registe-se já!
              </Link>
            </p>
            <button className="mt-5 py-2 lg:py-4 bg-primary-600 text-white w-full flex gap-2 justify-center rounded hover:bg-primary-400 active:bg-primary-300 duration-300 ease-in-out">
              Entrar <ArrowUpRight size={24} />
            </button>
          </form>
          {/* TODO: Replace with other providers: google and facebook */}
        </section>
      </Container>
    </main>
  );
};

LoginPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default LoginPage;
