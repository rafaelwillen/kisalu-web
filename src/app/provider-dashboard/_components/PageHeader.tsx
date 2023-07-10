type Props = {
  pageTitle: string;
  pageDescription: string;
};

export default function PageHeader({ pageDescription, pageTitle }: Props) {
  return (
    <div className="mb-14">
      <h1 className="text-3xl font-bold">{pageTitle}</h1>
      <p>{pageDescription}</p>
    </div>
  );
}
