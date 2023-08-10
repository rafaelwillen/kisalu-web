import { ExperienceInfo } from "@/api/experienceInfo";
import classNames from "classnames";
import AddExperienceFormDialog from "./AddExperienceFormDialog";
import ExperienceInfoItem from "./ExperienceInfoItem";

type Props = {
  experiences: ExperienceInfo[];
};

export default async function WorkAndExperienceDetails({ experiences }: Props) {
  return (
    <section className="mt-14 bg-white p-4 rounded lg:p-8">
      <div className="pb-2 lg:pb-5 border-b border-b-neutral-200 flex justify-between items-center">
        <h2 className="text-lg font-medium">Experiência Profissional</h2>
        <AddExperienceFormDialog experienceType="Work" />
      </div>
      <article
        className={classNames(
          experiences.length === 0 ? "py-20" : "space-y-3 py-7"
        )}
      >
        {experiences.length === 0 && (
          <p className="text-center">Não há nada para apresentar...</p>
        )}
        {experiences.map((experience, index) => (
          <ExperienceInfoItem
            experience={experience}
            index={index}
            key={experience.id}
          />
        ))}
      </article>
    </section>
  );
}
