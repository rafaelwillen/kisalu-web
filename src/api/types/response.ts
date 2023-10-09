import {
  BaseAddressType,
  BaseAdministratorType,
  BaseAuthType,
  BaseCategoryType,
  BaseProjectType,
  BaseReviewType,
  BaseServiceType,
  CategoryCreator,
  Gender,
  Role,
} from ".";

type CategoryFromResponseBody = Omit<BaseCategoryType, "bannerImageUrl"> & {
  totalServices: number;
  totalProjects: number;
  availableServices: number;
  availableProjects: number;
  createdBy: CategoryCreator;
};

export type AdminAuthenticationResponseBody = {
  token: string;
  user: {
    email: string;
    role: Role;
    createdAt: string;
    firstName: string;
    lastName: string;
    avatarImageURL: string;
  };
};

export type UserAuthenticationResponseBody = {
  isActive: boolean;
  phoneNumber?: string;
  role: Role;
  updatedAt: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  avatarImageURL: string;
  biography?: string;
  birthDate?: string;
  email: string;
  gender: Gender;
  address?: Omit<BaseAddressType, "id">;
};

export type UploadCategoryImageResponseBody = {
  url: string;
};

export type GetAllCategoriesResponseBody = CategoryFromResponseBody[];

export type GetAllPublicCategoriesResponseBody = Omit<
  CategoryFromResponseBody,
  "createdBy"
>[];

export type GetMostPopularCategoriesResponseBody = (Pick<
  BaseCategoryType,
  "name" | "slug"
> & {
  totalServices: number;
  totalProjects: number;
})[];

export type GetSingleCategoryResponseBodyType = BaseCategoryType;

export type GetAllAdministratorsResponseBody =
  readonly GetSingleAdministratorResponseBody[];

export type GetSingleAdministratorResponseBody = BaseAdministratorType & {
  auth: BaseAuthType;
  // TODO: Add the correct type
  disputes: readonly any[];
  createdCategories: readonly BaseCategoryType[];
};

export type GetAllServicesFromProvider = BaseServiceType[];

export type GetAllProjectsFromClient = BaseProjectType[];
export type GetAllProjectsFromCategory = Omit<BaseProjectType, "category">[];
export type GetAllServicesFromCategory = Omit<BaseServiceType, "category">[];
export type GetCategoryBySlug = Omit<
  GetSingleCategoryResponseBodyType,
  "admin"
>;

export type GetCategoryFromSearchQueryResponseBody = Pick<
  BaseCategoryType,
  "id" | "name" | "slug"
>[];

export type GetSingleServiceByIDResponseBody = BaseServiceType & {
  category: {
    name: string;
    slug: string;
  };
  User: {
    id: string;
    firstName: string;
    lastName: string;
    address?: BaseAddressType;
    reviews: BaseReviewType[];
  };
};