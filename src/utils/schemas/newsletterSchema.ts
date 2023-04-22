import { z } from "zod";

export const newsletterSchema = z.object({
  newsletterEmail: z
    .string({ required_error: "Campo obrigatório" })
    .nonempty("Campo obrigatório")
    .email("Email inválido"),
});

export type NewsletterFormType = z.infer<typeof newsletterSchema>;
