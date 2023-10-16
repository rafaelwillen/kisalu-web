import { z } from "zod";

export const serviceHireSchema = z.object({
  agreedValue: z.preprocess((val) => {
    if (!val) return -1;
    if (typeof val === "number") return val;
    return Number((val as string).replace(/[^0-9]/g, ""));
  }, z.number().min(0, "Campo obrigatório")),
  startDate: z
    .date()
    .min(new Date())
    .or(z.string().datetime())
    .transform((date) => new Date(date)),
  address: z.object({
    county: z.string().min(3),
    province: z.string().min(3),
    addressLine: z.string().min(3),
  }),
  activityDetails: z.string().optional(),
});

export type ServiceHireFormType = z.infer<typeof serviceHireSchema>;
