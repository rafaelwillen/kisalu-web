import { NewCategoryFormType } from "@/utils/schemas/newCategorySchema";

export type CreateCategoryRequestDataType = Pick<
  NewCategoryFormType,
  "name" | "description"
> & { cardImageUrl: string; bannerImageUrl: string };

type BaseCategoryType = {
  id: string;
  name: string;
  cardImageUrl: string;
  bannerImageUrl: string;
};

export type GetAllCategoriesResponseDataType = (Omit<
  BaseCategoryType,
  "bannerImageUrl"
> & {
  numberOfProjects: number;
  numberOfServices: number;
})[];

export type GetSingleCategoryResponseDataType = BaseCategoryType & {
  numberOfProjects: number;
  numberOfServices: number;
};
