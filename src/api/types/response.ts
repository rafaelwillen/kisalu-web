import {
  BaseAdministratorType,
  BaseAuthType,
  BaseCategoryType,
  BaseProjectType,
  BaseServiceType,
  CategoryCreator,
  Gender,
  Role,
} from ".";

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
};

export type UploadCategoryImageResponseBody = {
  url: string;
};

export type GetAllCategoriesResponseBody = (Omit<
  BaseCategoryType,
  "bannerImageUrl"
> & {
  totalServices: number;
  totalProjects: number;
  availableServices: number;
  availableProjects: number;
  createdBy: CategoryCreator;
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