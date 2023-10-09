type Props = {
  description?: string;
};

export default function ProviderDescription({ description }: Props) {
  return (
    <section className="mt-8">
      <h2 className="font-medium text-xl mb-4 xl:mb-10">Descrição</h2>
      <p className="leading-7">
        {description !== null ? description : "Sem descrição"}
      </p>
    </section>
  );
}
