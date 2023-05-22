import { z } from "zod";
import {
  IMAGE_MIME_TYPES,
  MAX_IMAGE_FILE as MAX_IMAGE_SIZE,
} from "../constants";
import { noSymbolRegex } from "../constants/regex";

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
    .regex(noSymbolRegex, "Valor inválido")
    .max(255, "Valor demasiado grande"),
  banner: z
    .custom<File>((file) => file instanceof File, {
      message: "Campo obrigatório",
    })
    .refine(
      (file) => file.size < MAX_IMAGE_SIZE,
      "Ficheiro demasiado grande. Deve ser inferior a 5MB"
    )
    .refine(
      (file) => IMAGE_MIME_TYPES.includes(file.type),
      "Deve ser uma imagem nos seguintes formatos (png, jpg, jpeg, webp)"
    ),
  card: z
    .custom<File>((file) => file instanceof File, {
      message: "Campo obrigatório",
    })
    .refine(
      (file) => file.size < MAX_IMAGE_SIZE,
      "Ficheiro demasiado grande. Deve ser inferior a 5MB"
    )
    .refine(
      (file) => IMAGE_MIME_TYPES.includes(file.type),
      "Deve ser uma imagem nos seguintes formatos (png, jpg, jpeg, webp)"
    ),
});

export type NewCategoryFormType = z.infer<typeof newCategorySchema>;
