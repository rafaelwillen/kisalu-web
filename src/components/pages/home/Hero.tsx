import { SearchButton } from "@/components/buttons";
import { SearchInput } from "@/components/form";
import { Container } from "../common";
import HomeSelectRole from "./HomeSelectRole";

export default function Hero() {
  return (
    <Container small>
      <div className="lg:hidden block">
        <h1 className="mt-24 mb-10 text-3xl font-bold ">
          Contrate os melhores prestadores para qualquer trabalho, online
        </h1>
        {/* Probably will replace this with react hook form or just keep with the default form */}
        <form className="flex flex-col gap-2 ">
          <SearchInput type="search" placeholder="Procurar na plataforma" />
          <SearchButton>Pesquisar</SearchButton>
        </form>
      </div>
      <div className="hidden lg:block pt-52 pb-64 max-w-3xl">
        <h1 className="mb-16 text-4xl font-bold">
          Contrate os melhores prestadores para qualquer trabalho, online
        </h1>
        <form className="flex items-center text-text-200 bg-white pl-7 pr-2 py-2 rounded gap-7">
          <SearchInput placeholder="Procurar na plataforma" />
          <div className="flex-1">
            <HomeSelectRole />
          </div>
          <SearchButton>Pesquisar</SearchButton>
        </form>
      </div>
    </Container>
  );
}
