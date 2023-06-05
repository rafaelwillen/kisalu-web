"use client";

import SearchForm from "@/components/forms/SearchForm";
import { formatToCompactNumber } from "@/utils/intl";
import ProjectCard from "./ProjectCard";

type Props = {
  initialData: any[];
};

export default function ProjectListSection({ initialData }: Props) {
  return (
    <div className="grid grid-cols-[300px,1fr] gap-x-14">
      <aside className="debug">{/* TODO: Add the filter here */}</aside>
      <section className="flex flex-col gap-8 debug">
        <SearchForm
          inputProps={{
            name: "search-projects",
            placeholder: "Pesquisar projectos",
          }}
          onSubmit={(searchValue) => console.log(searchValue)}
        />
        <div className="flex justify-between items-center">
          <p>
            <strong>{formatToCompactNumber(initialData.length)}</strong>{" "}
            projectos disponíveis
          </p>
          <p>Ordenar por ...</p>
        </div>
        <div className="space-y-5">
          {/* TODO: Add real data*/}
          {initialData.map((_, index) => (
            <ProjectCard key={index} />
          ))}
        </div>
        <div>{/* TODO: Add pagination here */}</div>
      </section>
    </div>
  );
}
