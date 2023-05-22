import { z } from "zod";

export const adminLoginSchema = z.object({
  username: z
    .string()
    .min(3, "Username inválido")
    .max(255, "Username inválido"),
  password: z.string().min(3, "Password inválida"),
});

export type AdminLoginFormType = z.infer<typeof adminLoginSchema>;
