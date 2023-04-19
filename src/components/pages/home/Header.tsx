import { MagnifyingGlass } from "@phosphor-icons/react";
import { Container } from "../common";
import Navbar from "../common/Navbar";
import HomeSelectRole from "./HomeSelectRole";

export default function Header() {
  return (
    <header className="relative header-bg text-white pb-16">
      <Navbar />
      <Container small>
        <div className="lg:hidden block">
          <h1 className="mt-24 mb-10 text-3xl font-bold ">
            Contrate os melhores prestadores para qualquer trabalho, online
          </h1>
          {/* Probably will replace this with react hook form or just keep with the default form */}
          <form className="flex flex-col gap-2 ">
            <div className="relative bg-white rounded flex p-2 items-center gap-2">
              <MagnifyingGlass size={20} color="#000" />
              {/* TODO: Refactor this to be a component */}
              <input
                type="search"
                className="flex-1 py-2 text-text-200 font-regular"
                placeholder="Está a procura de um serviço?"
              />
            </div>
            {/* TODO: Refactor this to be a component */}
            <button className="bg-primary-600 font-bold text-sm py-4 rounded duration-300 hover:bg-primary-500">
              Pesquisar
            </button>
          </form>
        </div>
        <div className="hidden lg:block pt-52 pb-64 max-w-3xl">
          <h1 className="mb-16 text-4xl font-bold">
            Contrate os melhores prestadores para qualquer trabalho, online
          </h1>
          <form className="flex items-center text-text-200 bg-white pl-7 pr-2 py-2 rounded gap-7">
            <div className="flex items-center flex-1 border-r pr-2 border-neutral-200 gap-2">
              <MagnifyingGlass size={20} />
              <input
                type="search"
                className="flex-1 placeholder:font-regular text-base py-1 px-1 outline-none border-b border-neutral-200/0 focus:border-neutral-500 duration-300"
                placeholder="O que está procurando?"
              />
            </div>
            <div className="flex-1">
              <HomeSelectRole />
            </div>
            {/* TODO: Refactor this to be a component */}
            <button className="bg-primary-600 font-bold text-sm py-4 rounded duration-300 hover:bg-primary-500 px-9 text-white">
              Pesquisar
            </button>
          </form>
        </div>
      </Container>
    </header>
  );
}
