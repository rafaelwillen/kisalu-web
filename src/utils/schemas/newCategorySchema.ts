import { z } from "zod";
import { noSymbolRegex } from "../constants/regex";
import { fileSchema } from "./commonSchema";

export const newCategorySchema = z.object({
  name: z
    .string()
    .nonempty("Campo obrigatório")
    .min(3, "Campo obrigatório")
    .regex(noSymbolRegex, "Valor inválido")
    .max(255, "Valor demasiado grande"),
  description: z
    .string()
    .nonempty("Campo obrigatório")
    .min(3, "Campo obrigatório")
    .max(255, "Valor demasiado grande"),
  banner: fileSchema,
  card: fileSchema,
});

export type NewCategoryFormType = z.infer<typeof newCategorySchema>;
