import { z } from "zod";
import { fileSchema } from "./commonSchema";

export const serviceBasicInformationCreationSchema = z.object({
  bannerImage: fileSchema.optional(),
  title: z
    .string()
    .min(3, "Campo obrigatório")
    .max(255, "Valor demasiado grande"),
  description: z.string().min(3, "Campo obrigatório"),
  minimumPrice: z.preprocess((val) => {
    if (!val) return -1;
    return Number((val as string).replace(/[^0-9]/g, ""));
  }, z.number().min(0, "Campo obrigatório")),
  isHighlighted: z.boolean().optional().default(false),
  categoryName: z.string({ required_error: "Campo obrigatório" }),
  featuredImages: z.array(
    z.object({
      file: fileSchema,
    })
  ),
  deliveryTime: z.string().nonempty("Campo obrigatório"),
});

export type ServiceBasicInformationCreationFormType = z.infer<
  typeof serviceBasicInformationCreationSchema
>;
