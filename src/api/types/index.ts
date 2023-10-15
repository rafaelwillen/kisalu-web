import { ExperienceInfo } from "../experienceInfo";

export type ISODateString = string;
export type Role = "Administrator" | "Provider" | "Client";
export type Gender = "Male" | "Female";
export type State = "Available" | "Draft" | "Unavailable";
export type ActivityState =
  | "Active"
  | "OnHold"
  | "OnDispute"
  | "Finished"
  | "Cancelled"
  | "OnRevision";

export type BaseCategoryType = {
  id: string;
  name: string;
  mainImageURL: string;
  bannerImageURL: string;
  slug: string;
  description: string;
  createdAt: string;
  services: BaseServiceType[];
  projects: BaseProjectType[];
  admin: CategoryCreator;
};

export type CategoryCreator = {
  id: string;
  firstName: string;
  lastName: string;
  avatarImageURL: string;
  gender: Role;
};

export type BaseAdministratorType = {
  id: string;
  firstName: string;
  lastName: string;
  avatarImageURL: string;
  gender: Gender;
};

export type BaseAuthType = {
  email: string;
  createdAt: string;
  updatedAt: string;
  role: Role;
};

export type BaseServiceType = {
  id: string;
  title: string;
  description: string;
  bannerImageURL?: string;
  publishedDate?: ISODateString;
  createdAt: ISODateString;
  viewsCount: number;
  state: State;
  featuredImagesURL: string[];
  minimumPrice: number;
  deliveryTime: ISODateString;
  isHighlighted: boolean;
  User: {
    avatarImageURL: string;
    firstName: string;
    lastName: string;
  };
};

export type BaseProjectType = {
  id: string;
  title: string;
  description: string;
  bannerImageURL?: string;
  publishedDate?: ISODateString;
  createdAt: ISODateString;
  viewsCount: number;
  state: State;
  attachments: unknown[];
  minimumPrice: number;
  maximumPrice: number;
  User: {
    avatarImageURL: string;
    firstName: string;
    lastName: string;
  };
};

export type BaseAddressType = {
  id: string;
  addressLine: string;
  county: string;
  province: string;
};

export type BaseProviderType = {
  id: string;
  firstName: string;
  lastName: string;
  avatarImageURL: string;
  biography?: string;
  birthDate: ISODateString;
  gender: Gender;
  experienceInfo: Array<ExperienceInfo>;
  portfolio: Array<unknown>;
  reviews: Array<BaseReviewType>;
  providerActivities: Array<unknown>;
  auth: {
    createdAt: ISODateString;
    email: string;
    phoneNumber: string;
  };
  services: Array<{
    id: string;
    title: string;
    description: string;
    bannerImageURL: string;
    publishedDate: any;
    createdAt: string;
    viewsCount: number;
    state: string;
    featuredImagesURL: Array<string>;
    minimumPrice: number;
    isHighlighted: boolean;
    deliveryTime: string;
    categoryId: string;
  }>;
  address: BaseAddressType;
};

export type BaseReviewType = {
  id: string;
  rating: number;
  commentary: string;
  client: {
    avatarImageURL: string;
    firstName: string;
    lastName: string;
  };
};

export type BaseActivityType = {
  id: string;
  agreedValue: number;
  state: ActivityState;
  startDate: ISODateString;
  finishedDate?: ISODateString;
  createdAt: ISODateString;
  activityDetails?: string;
  service: {
    id: string;
    title: string;
    description: string;
    bannerImageURL: string;
    publishedDate: any;
    createdAt: string;
    viewsCount: number;
    state: string;
    featuredImagesURL: Array<any>;
    minimumPrice: number;
    isHighlighted: boolean;
    deliveryTime: string;
    categoryId: string;
    userId: string;
  };
  client: {
    id: string;
    firstName: string;
    lastName: string;
    avatarImageURL: string;
    biography: any;
    birthDate: string;
    gender: string;
    loginId: string;
  };
  provider: {
    id: string;
    firstName: string;
    lastName: string;
    avatarImageURL: string;
    biography: any;
    birthDate: string;
    gender: string;
    loginId: string;
  };
};




export const storageAcceptableParams = {
  category: "category",
  service: "service",
  avatar: "avatar",
  project: "project",
} as const;

export type StorageAcceptableParamsType = keyof typeof storageAcceptableParams;
