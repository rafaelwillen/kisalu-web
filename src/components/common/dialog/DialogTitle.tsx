import { DialogTitle as Title } from "@radix-ui/react-dialog";

type Props = {
  title: string;
};

export default function DialogTitle({ title }: Props) {
  return (
    <Title className="text-lg  font-medium pb-2 lg:pb-5 border-b border-b-neutral-200">
      {title}
    </Title>
  );
}
