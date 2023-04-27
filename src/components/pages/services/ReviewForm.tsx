import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Input } from "@/components/form";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function ReviewForm() {
  return (
    <form>
      {/* TODO: Add star rating */}
      {/* TODO: Implement textarea component */}
      <Input label="Nome" />
      <Input label="Email" type="email" />
      {/* TODO: Add checkbox from radix */}
      <PrimaryButton type="submit">
        Enviar comentário <ArrowUpRight />
      </PrimaryButton>
    </form>
  );
}
