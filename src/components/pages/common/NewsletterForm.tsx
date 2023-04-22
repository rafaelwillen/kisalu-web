import {
  NewsletterFormType,
  newsletterSchema,
} from "@/utils/schemas/newsletterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function NewsletterForm() {
  const { register, handleSubmit } = useForm<NewsletterFormType>({
    resolver: zodResolver(newsletterSchema),
  });

  function handleFormSubmit(data: NewsletterFormType) {
    console.log(data);
    alert("WORK IN PROGRESS");
  }

  return (
    <form
      noValidate
      className="my-7 lg:mt-0"
      onSubmit={handleSubmit(handleFormSubmit, (error) =>
        toast.error(`Ocorreu um erro: ${error.newsletterEmail?.message}`, {
          position: "bottom-right",
        })
      )}
    >
      <label htmlFor="newsletterEmail" className="text-lg font-medium">
        Subscrever
      </label>
      <div className="rounded flex py-4 px-5 bg-white/5 mt-4 gap-2 justify-between flex-wrap">
        <input
          className="bg-white/0 outline-none flex-1"
          type="email"
          placeholder="O seu endereço de email"
          id="newsletterEmail"
          {...register("newsletterEmail")}
        />

        <button className="py-1 px-2 hover:bg-white/20 duration-300 rounded mx-auto">
          Enviar
        </button>
      </div>
    </form>
  );
}
