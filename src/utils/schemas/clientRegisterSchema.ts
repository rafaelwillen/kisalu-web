import { z } from "zod";
import { ADULT_DATE_OF_BIRTH } from "../constants";
import { angolanPhoneNumberRegex } from "../constants/regex";

export const registerSchema = z
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
    phoneNumber: z
      .string({ required_error: "Campo obrigatório" })
      .nonempty("Campo obrigatório")
      .regex(angolanPhoneNumberRegex, "Número de telefone inválido")
      .transform((value) => value.replaceAll(" ", "")),
    gender: z.enum(["Male", "Female"], { required_error: "Campo obrigatório" }),
    birthDate: z
      .date({ required_error: "Campo obrigatório" })
      .max(ADULT_DATE_OF_BIRTH, "Deve ter pelo menos 18 anos"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords não coincidem",
    path: ["confirmPassword"],
  });

export type RegisterFormType = z.infer<typeof registerSchema>;
