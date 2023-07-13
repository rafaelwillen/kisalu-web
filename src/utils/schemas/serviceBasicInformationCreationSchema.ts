import { z } from "zod";
import { fileSchema } from "./commonSchema";

export const serviceBasicInformationCreationSchema = z.object({
  bannerImage: fileSchema.optional(),
  title: z
    .string()
    .min(3, "Campo obrigatório")
    .max(255, "Valor demasiado grande"),
  description: z.string().min(3, "Campo obrigatório"),
  minimumPrice: z.number().min(0, "Campo obrigatório"),
  isHighlighted: z.boolean().optional().default(false),
  category: z.string({ required_error: "Campo obrigatório" }),
});

export type ServiceBasicInformationCreationFormType = z.infer<
  typeof serviceBasicInformationCreationSchema
>;
