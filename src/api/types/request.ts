import { NewCategoryFormType } from "@/utils/schemas/newCategorySchema";

export type CreateCategoryRequestDataType = Pick<
  NewCategoryFormType,
  "name" | "description"
> & { cardImageUrl: string; bannerImageUrl: string };

export type AuthenticationRequestBody = {
  email: string;
  password: string;
};