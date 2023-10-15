"use client";

import Container from "@/components/common/Container";
import { useAuth } from "@/context/AuthContext";
import SearchForm from "./SearchForm";

export default function Hero() {
  const { token } = useAuth();
  return (
    <Container small>
      <div className="lg:pt-52 lg:pb-64 lg:max-w-3xl">
        <h1 className="mt-24 lg:mb-16 mb-10 text-3xl lg:text-4xl font-bold ">
          Contrate os profissionais mais qualificados para qualquer tarefa,
          online na Kisalu.
        </h1>
        {token && <SearchForm />}
      </div>
    </Container>
  );
}
