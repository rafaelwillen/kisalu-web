import { ExperienceInfo } from "@/api/experienceInfo";
import AddExperienceFormDialog from "./AddExperienceFormDialog";

type Props = {
  experiences: ExperienceInfo[];
};

export default async function EducationDetails({ experiences }: Props) {
  return (
    <section className="mt-14 bg-white p-4 rounded lg:p-8">
      <div className="pb-2 lg:pb-5 border-b border-b-neutral-200 flex justify-between items-center">
        <h2 className="text-lg font-medium">Educação</h2>
        <AddExperienceFormDialog experienceType="Education" />
      </div>
      <article className="py-20">
        {experiences.length === 0 && (
          <p className="text-center">Não há nada para apresentar...</p>
        )}
      </article>
    </section>
  );
}
