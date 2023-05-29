import { NewCategoryFormType } from "@/utils/schemas/newCategorySchema";

export type CreateCategoryRequestDataType = Pick<
  NewCategoryFormType,
  "name" | "description"
> & { cardImageUrl: string; bannerImageUrl: string };
