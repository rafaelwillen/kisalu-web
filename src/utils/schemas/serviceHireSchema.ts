import { z } from "zod";

export const serviceHireSchema = z.object({
  agreedValue: z.number().min(100),
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
