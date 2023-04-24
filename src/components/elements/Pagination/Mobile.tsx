import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export default function MobilePagination() {
  return (
    <section className="flex flex-1 justify-between sm:hidden">
      <button
        type="button"
        className="inline-flex items-center rounded-full border border-neutral-500 p-4 text-text-200 hover:bg-accent-700 hover:text-white duration-300 ease-in-out"
      >
        <CaretLeft />
      </button>
      <div></div>
      <button
        type="button"
        className="inline-flex items-center rounded-full border border-neutral-500 p-4 text-text-200 hover:bg-accent-700 hover:text-white duration-300 ease-in-out"
      >
        <CaretRight />
      </button>
    </section>
  );
}
