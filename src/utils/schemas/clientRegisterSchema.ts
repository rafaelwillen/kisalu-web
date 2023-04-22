import { z } from "zod";
import { angolanPhoneNumberRegex } from "../constants/regex";

export const clientRegisterSchema = z
  .object({
    firstName: z
      .string({ required_error: "Campo obrigatório" })
      .max(50, "Nome demasiado grande")
      .nonempty("Campo obrigatório"),
    lastName: z
      .string({ required_error: "Campo obrigatório" })
      .max(50, "Nome demasiado grande")
      .nonempty("Campo obrigatório"),
    email: z
      .string({ required_error: "Campo obrigatório" })
      .email("Email inválido")
      .nonempty("Campo obrigatório"),
    password: z
      .string({ required_error: "Campo obrigatório" })
      .min(8, "Password demasiado curta")
      .nonempty("Campo obrigatório"),
    confirmPassword: z
      .string({ required_error: "Campo obrigatório" })
      .nonempty("Campo obrigatório"),
    phone: z
      .string({ required_error: "Campo obrigatório" })
      .nonempty("Campo obrigatório")
      .regex(angolanPhoneNumberRegex, "Número de telefone inválido")
      .transform((value) => value.replaceAll(" ", "")),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords não coincidem",
    path: ["confirmPassword"],
  });

export type ClientRegisterFormType = z.infer<typeof clientRegisterSchema>;
