import { PropsWithChildren } from "react";

export default function SearchButton({ children }: PropsWithChildren) {
  return (
    <button className="bg-primary-600 font-bold text-sm py-4 rounded duration-300 lg:px-9 text-white hover:bg-primary-500">
      {children}
    </button>
  );
}
