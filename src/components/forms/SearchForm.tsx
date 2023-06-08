"use client";

import { Search } from "lucide-react";
import { FormEvent } from "react";

type Props = {
  inputProps: {
    placeholder: string;
    name: string;
  };
  onSubmit: (searchValue: string) => void;
};

function SearchForm({ inputProps, onSubmit }: Props) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const searchElement = event.currentTarget.elements.namedItem(
      inputProps.name
    );
    if (!(searchElement && searchElement instanceof HTMLInputElement)) return;
    const searchValue = searchElement.value;
    onSubmit(searchValue);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-md:flex-col bg-white shadow p-2 rounded-md items-center gap-2"
    >
      <div className="p-2 border-b border-primary-400/0 flex flex-1 items-center  duration-150 gap-2">
        <Search size={16} />
        <input
          {...inputProps}
          type="search"
          name="search-projects"
          className="flex-1 outline-none border-0 focus:ring-0 p-0"
        />
      </div>
      <button
        type="submit"
        className="max-md:w-full bg-primary-600 py-4 px-9 text-white rounded duration-300 ease-in-out hover:bg-primary-400 active:bg-primary-300"
      >
        Pesquisar
      </button>
    </form>
  );
}

export default SearchForm;
