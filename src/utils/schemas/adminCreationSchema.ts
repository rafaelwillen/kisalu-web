import { z } from "zod";
import { noSymbolRegex } from "../constants/regex";
import { fileSchema } from "./commonSchema";

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
    avatarImage: fileSchema,
  })
  .refine(({ confirmPassword, password }) => confirmPassword === password, {
    message: "A confirmação da password é diferente da password",
    path: ["confirmPassword"],
  });

export type AdminCreationFormType = z.infer<typeof adminCreationSchema>;
