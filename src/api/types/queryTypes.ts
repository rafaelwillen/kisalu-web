import { BaseCategoryType } from ".";

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

export type LoginAdminResponseBodyType = {
  token: string;
};

export type VerifyTokenResponseBodyType = {
  message: string;
  payload: {
    username: string;
    email: string;
    exp: number;
    iat: number;
  };
};

export type UploadCategoryImageResponseDataType = {
  url: string;
};
