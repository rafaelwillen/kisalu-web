import { z } from "zod";
import { IMAGE_MIME_TYPES, MAX_IMAGE_FILE } from "../constants";
import { noSymbolRegex } from "../constants/regex";

export const adminCreationSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "Nome demasiado curto")
      .regex(noSymbolRegex, "Nome inválido"),
    lastName: z
      .string()
      .min(2, "Apelido demasiado curto")
      .regex(noSymbolRegex, "Apelido inválido"),
    email: z.string().email("Email inválido"),
    password: z.string().min(8, "Password demasiado curta"),
    confirmPassword: z.string().min(8, "Password demasiado curta"),
    gender: z.enum(["Male", "Female"], {
      required_error: "Campo obrigatório",
    }),
    avatarImage: z
      .custom<File>((file) => file instanceof File, {
        message: "Campo obrigatório",
      })
      .refine(
        (file) => file.size < MAX_IMAGE_FILE,
        "Ficheiro demasiado grande. Deve ser inferior a 5MB"
      )
      .refine(
        (file) => IMAGE_MIME_TYPES.includes(file.type),
        "Deve ser uma imagem nos seguintes formatos (png, jpg, jpeg, webp)"
      ),
  })
  .refine(({ confirmPassword, password }) => confirmPassword === password, {
    message: "A confirmação da password é diferente da password",
    path: ["confirmPassword"],
  });

export type AdminCreationFormType = z.infer<typeof adminCreationSchema>;
