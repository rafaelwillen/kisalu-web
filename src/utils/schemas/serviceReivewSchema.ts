import { z } from "zod";

export const TEXT_AREA_MAX_LENGTH = 500;

export const serviceReviewSchema = z.object({
  rating: z.number().int().min(1, "Selecione pelo menos uma estrela").max(5),
  review: z.string().max(TEXT_AREA_MAX_LENGTH).min(1, "Campo obrigatório"),
});

export type ServiceReviewFormType = z.infer<typeof serviceReviewSchema>;
