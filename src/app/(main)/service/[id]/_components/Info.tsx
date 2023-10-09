// TODO: In the future, add rich text support

type Props = {
  title: string;
  description: string;
};

export default function Info({ description, title }: Props) {
  return (
    <section className="mt-6 space-y-5 xl:mt-8">
      <h1 className="text-2xl text-primary-600 underline">{title}</h1>
      <h2 className="font-medium text-xl">Sobre o Serviço</h2>
      <div className="space-y-4">
        <p>{description}</p>
      </div>
    </section>
  );
}
