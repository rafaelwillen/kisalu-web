import { MagnifyingGlass } from "@phosphor-icons/react";
import { InputHTMLAttributes, forwardRef } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <div className="relative bg-white rounded flex p-2 items-center gap-2 lg:flex-1 lg:border-r lg:pr-2 lg:border-neutral-200">
    <MagnifyingGlass size={20} color="#000" />
    <input
      ref={ref}
      {...props}
      type="search"
      className="flex-1 py-2 text-text-200 font-regular  lg:placeholder:font-regular lg:py-1 lg:px-1 outline-none border-b border-neutral-200/0 focus:border-neutral-500 duration-300"
    />
  </div>
));

export default SearchInput;
