import { isBefore } from "date-fns";
import { z } from "zod";

export const providerExperienceSchema = z
  .object({
    title: z.string().min(3, "Campo obrigatório"),
    institutionName: z.string().min(3, "Campo obrigatório"),
    startDate: z
      .date({ required_error: "Campo obrigatório" })
      .max(new Date(), "Data não pode ser depois de hoje"),
    endDate: z
      .date()
      .max(new Date(), "Data não pode ser depois de hoje")
      .optional(),
    description: z.string().min(3, "Campo obrigatório"),
    type: z.enum(["Work", "Education"], {
      required_error: "Campo obrigatório",
      invalid_type_error: "Tipo inválido",
    }),
  })
  .refine(
    ({ startDate, endDate }) => {
      if (!endDate) return true;
      return isBefore(startDate, endDate);
    },
    {
      message: "Data de fim não pode ser antes da data de início",
      path: ["endDate"],
    }
  );

export type ProviderExperienceFormType = z.infer<
  typeof providerExperienceSchema
>;
