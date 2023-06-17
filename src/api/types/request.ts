import { NewCategoryFormType } from "@/utils/schemas/newCategorySchema";

export type CreateCategoryRequestBody = Pick<
  NewCategoryFormType,
  "name" | "description"
> & { mainImageURL: string; bannerImageURL: string };

export type AuthenticationRequestBody = {
  email: string;
  password: string;
};