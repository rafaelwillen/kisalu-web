"use client";

import { Search } from "lucide-react";
import HomeSelectRole from "./HomeSelectRole";

export default function SearchForm() {
  return (
    <form className="flex flex-col lg:flex-row  lg:items-center lg:text-text-200 lg:bg-white lg:pl-7 lg:pr-2 lg:py-2 lg:rounded lg:gap-7">
      <div className="relative bg-white rounded-t flex p-2 items-center gap-2 lg:flex-1 lg:border-r lg:pr-2 lg:border-neutral-200">
        <Search className="w-5 h-5 text-black" />
        <input
          placeholder="Procurar na plataforma"
          type="search"
          className="flex-1 py-2 focus:ring-0 text-text-200 font-regular lg:placeholder:font-regular lg:py-1 lg:px-1 outline-none duration-300 focus:border-none border-none"
        />
      </div>
      <div className="flex-1 max-lg:mb-4">
        <HomeSelectRole />
      </div>
      <button className="bg-primary-600 font-bold text-sm py-4 rounded duration-300 lg:px-9 text-white hover:bg-primary-500">
        Pesquisar
      </button>
    </form>
  );
}
