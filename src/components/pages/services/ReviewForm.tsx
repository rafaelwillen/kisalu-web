import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Checkbox, Input, Rating, TextArea } from "@/components/form";
import { ArrowUpRight } from "@phosphor-icons/react";
import { useState } from "react";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  return (
    <form className="mt-5 space-y-4">
      <Rating
        label="A sua avaliação"
        name="rating"
        onChange={(number) => setRating(number)}
        value={rating}
        required
      />
      <TextArea label="Comentário" />
      <Input label="Nome" />
      <Input label="Email" type="email" />
      <Checkbox label="Salvar o meu nome e email para os próximos comentários" />
      <PrimaryButton type="submit">
        Enviar comentário <ArrowUpRight />
      </PrimaryButton>
    </form>
  );
}
