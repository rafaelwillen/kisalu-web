import { z } from "zod";

const passwordSchema = z.string().min(8, "Demasiado curta");

export const userPasswordChangeSchema = z
  .object({
    oldPassword: passwordSchema,
    newPassword: passwordSchema,
    newPasswordConfirmation: passwordSchema,
  })
  .refine(
    ({ newPassword, newPasswordConfirmation }) =>
      newPassword === newPasswordConfirmation,
    {
      message: "As novas senhas não coincidem",
      path: ["newPasswordConfirmation"],
    }
  );

export type UserPasswordChangeFormType = z.infer<
  typeof userPasswordChangeSchema
>;
