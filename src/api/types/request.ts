import { NewCategoryFormType } from "@/utils/schemas/newCategorySchema";
import { Gender } from ".";

export type CreateCategoryRequestBody = Pick<
  NewCategoryFormType,
  "name" | "description"
> & { mainImageURL: string; bannerImageURL: string };

export type AuthenticationRequestBody = {
  email: string;
  password: string;
};

export type CreateAdminRequestBody = {
  firstName: string;
  lastName: string;
  avatarImageURL: string;
  gender: Gender;
  email: string;
  password: string;
};

export type CreateUserRequestBody = {
  firstName: string;
  lastName: string;
  avatarImageURL: string;
  gender: Gender;
  email: string;
  password: string;
  biography?: string;
  birthday?: Date;
  phoneNumber: string;
};

export type CreateServiceRequestBody = {
  title: string;
  description: string;
  bannerImageURL?: string;
  featuredIImagesURL?: string[];
  minimumPrice: number;
  isHighlighted: boolean;
  categoryName: string;
};

export type CreateProjectRequestBody = {
  title: string;
  description: string;
  bannerImageURL?: string;
  featuredImagesURL?: string[];
  minimumPrice: number;
  maximumPrice: number;
  categoryName: string;
};