import { z } from "zod";

export const TEXT_AREA_MAX_LENGTH = 500;

export const serviceReviewSchema = z.object({
  rating: z.number().int().min(1).max(5),
  review: z.string().max(TEXT_AREA_MAX_LENGTH).nonempty("Campo obrigatório"),
  name: z.string().nonempty("Campo obrigatório"),
  email: z.string().email("E-mail inválido").nonempty("Campo obrigatório"),
  saveData: z.boolean().optional(),
});

export type ServiceReviewFormType = z.infer<typeof serviceReviewSchema>;
