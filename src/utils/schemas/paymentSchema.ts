import { z } from "zod";
import { MAX_PDF_FILE } from "../constants";

export const paymentSchema = z.object({
  invoice: z
    .custom<File>((file) => file instanceof File, {
      message: "Campo obrigatório",
    })
    .refine(
      (file) => file.size < MAX_PDF_FILE,
      "Ficheiro demasiado grande. Deve ser inferior a 10MB"
    )
    .refine(
      (file) => file.type === "application/pdf",
      "Formato inválido. Deve ser PDF"
    ),
});

export type PaymentFormType = z.infer<typeof paymentSchema>;
