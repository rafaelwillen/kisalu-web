import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Input } from "@/components/form";
import Rating from "@/components/form/Rating";
import { ArrowUpRight } from "@phosphor-icons/react";
import { useState } from "react";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  return (
    <form className="mt-5">
      <Rating
        label="A sua avaliação"
        name="rating"
        onChange={(number) => setRating(number)}
        value={rating}
        required
      />
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
