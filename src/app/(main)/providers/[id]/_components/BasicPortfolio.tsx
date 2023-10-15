import { ExperienceInfo } from "@/api/experienceInfo";

type Props = {
  experience: ExperienceInfo[];
};

export default function BasicPortfolio({ experience }: Props) {
  const academicExperience = experience.filter(
    (experience) => experience.type === "Education"
  );
  const workExperience = experience.filter(
    (experience) => experience.type === "Work"
  );
  const hasAcademicExperience = academicExperience.length !== 0;
  const hasWorkExperience = workExperience.length !== 0;

  return (
    <section>
      <article className="my-7 xl:my-10 pt-7 border-t border-neutral-300">
        <h2 className="text-xl font-medium">Educação</h2>
        {hasAcademicExperience ? (
          <ul className="flex flex-col mt-4 gap-5">
            {academicExperience.map((experience, index) => (
              <li
                key={experience.id}
                className="grid grid-cols-[auto,1fr] grid-rows-[repeat(4,auto)] gap-x-4 gap-y-2"
              >
                <p className="row-span-4 bg-accent-200 text-accent-600 font-medium text-xs h-fit py-2 px-3 rounded-full">
                  {index + 1}
                </p>
                <p className="bg-accent-200 px-5 py-1 w-fit rounded-full text-sm">
                  {new Date(experience.startDate).getFullYear()} -{" "}
                  {experience.endDate
                    ? new Date(experience.endDate).getFullYear()
                    : "Em progresso"}
                </p>
                <p className="font-medium text-lg">{experience.title}</p>
                <p className="text-accent-500 font-medium">
                  {experience.institutionName}
                </p>
                <p>{experience.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Não possui experiência academica</p>
        )}
      </article>
      <article className="my-7 py-7 border-y border-neutral-300">
        <h2 className="text-xl font-medium">Experiência Profissional</h2>
        {hasWorkExperience ? (
          <ul className="flex flex-col mt-4 gap-5">
            {workExperience.map((experience, index) => (
              <li
                key={experience.id}
                className="grid grid-cols-[auto,1fr] grid-rows-[repeat(4,auto)] gap-x-4 gap-y-2"
              >
                <p className="row-span-4 bg-accent-200 text-accent-600 font-medium text-xs h-fit py-2 px-3 rounded-full">
                  {index + 1}
                </p>
                <p className="bg-accent-200 px-5 py-1 w-fit rounded-full text-sm">
                  {new Date(experience.startDate).getFullYear()} -{" "}
                  {experience.endDate
                    ? new Date(experience.endDate).getFullYear()
                    : "Em progresso"}
                </p>
                <p className="font-medium text-lg">{experience.title}</p>
                <p className="text-accent-500 font-medium">
                  {experience.institutionName}
                </p>
                <p>{experience.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Não possui experiência profissional</p>
        )}
      </article>
    </section>
  );
}
