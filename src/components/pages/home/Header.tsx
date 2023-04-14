import { MagnifyingGlass } from "@phosphor-icons/react";
import { Container } from "../common";
import Navbar from "../common/Navbar";

export default function Header() {
  return (
    <header className="relative header-bg text-white pb-16">
      <Navbar />
      <Container>
        <h1 className="mt-24 mb-10 text-3xl font-bold ">
          Contrate os melhores prestadores para qualquer trabalho, online
        </h1>
        {/* Probably will replace this with react hook form or just keep with the default form */}
        <form className="flex flex-col gap-2 ">
          <div className="relative bg-white rounded flex p-2 items-center gap-2">
            <MagnifyingGlass size={20} color="#000" />
            {/* TODO: Refactor this to be a component */}
            <input
              type="text"
              className="flex-1 py-2 text-text-200 font-regular"
              placeholder="Está a procura de um serviço?"
            />
          </div>
          {/* TODO: Refactor this to be a component */}
          <button className="bg-primary-600 font-bold text-sm py-4 rounded duration-300 hover:bg-primary-500">
            Pesquisar
          </button>
        </form>
      </Container>
    </header>
  );
}
