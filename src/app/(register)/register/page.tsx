"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import Container from "@/components/common/Container";
import ClientRegisterSVG from "@/components/svg/ClientRegisterSVG";
import ProviderRegisterSVG from "@/components/svg/ProviderRegisterSVG";
import { Routes } from "@/utils/constants/routes";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [selectedUserType, setSelectedUserType] = useState<
    undefined | "client" | "provider"
  >();
  const buttonText = !selectedUserType
    ? "Criar conta"
    : selectedUserType === "client"
    ? "Entrar como cliente"
    : "Entrar como prestador";

  return (
    <main className="py-10 lg:py-32 max-md:border-b border-neutral-300">
      <Container small>
        <h1 className="text-center font-bold text-2xl mb-8">
          Como deseja juntar-se a plataforma?
        </h1>
        <section className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-4 md:flex-row">
            <button
              type="button"
              onClick={() => setSelectedUserType("client")}
              className={classNames(
                "w-full relative p-4 border border-neutral-300 rounded-lg flex flex-col items-center gap-8"
              )}
            >
              <ClientRegisterSVG
                className="w-1/2 lg:w-48 h-auto"
                name="Registo cliente"
              />
              <p className="text-center">
                Sou um <strong>cliente</strong>, quero contratar para um
                projecto
              </p>
              <div className="absolute w-6 h-6 rounded-full border-2 border-neutral-400 right-4 top-4 p-[2px]">
                <div
                  className={classNames(
                    "w-full h-full rounded-full",
                    selectedUserType === "client"
                      ? "bg-primary-600"
                      : "bg-transparent"
                  )}
                />
              </div>
            </button>
            <button
              type="button"
              onClick={() => setSelectedUserType("provider")}
              className={classNames(
                "w-full relative p-4 border border-neutral-300 rounded-lg flex flex-col items-center gap-8"
              )}
            >
              <ProviderRegisterSVG
                className="w-1/2 lg:w-44 h-auto"
                name="Registo prestador"
              />
              <p className="text-center">
                Sou um <strong>prestador</strong>, estou a procura de um serviço
              </p>
              <div className="absolute w-6 h-6 rounded-full border-2 border-neutral-400 right-4 top-4 p-[2px]">
                <div
                  className={classNames(
                    "w-full h-full rounded-full",
                    selectedUserType === "provider"
                      ? "bg-primary-600"
                      : "bg-transparent"
                  )}
                />
              </div>
            </button>
          </div>
          <Link
            legacyBehavior
            href={
              selectedUserType === "client"
                ? Routes.clientRegister
                : Routes.providerRegister
            }
          >
            <PrimaryButton disabled={!selectedUserType}>
              {buttonText}
            </PrimaryButton>
          </Link>
          <p className="text-center mt-4">
            Já tem uma conta?{" "}
            <Link href={Routes.login} className="text-primary-600">
              Iniciar sessão
            </Link>
          </p>
        </section>
      </Container>
    </main>
  );
}
