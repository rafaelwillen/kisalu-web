export type BaseCategoryType = {
  id: string;
  name: string;
  mainImageURL: string;
  bannerImageURL: string;
  slug: string;
  description: string;
  createdAt: string;
  services: unknown[];
  projects: unknown[];
  admin: CategoryCreator;
};

export type CategoryCreator = {
  id: string;
  firstName: string;
  lastName: string;
  avatarImageURL: string;
  gender: Role;
};

export type Role = "Administrator" | "Provider" | "Client";
export type Gender = "Male" | "Female";
export type State = "Available" | "Draft" | "Unavailable";

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
  bannerImageURL: string | null;
  publishedDate: Date | null;
  createdAt: Date;
  viewsCount: number;
  state: State;
  featuredImagesURL: string[];
  minimumPrice: number;
  isHighlighted: boolean;
};

export type BaseProjectType = {
  id: string;
  title: string;
  description: string;
  bannerImageURL: string | null;
  publishedDate?: string | Date;
  createdAt: string | Date;
  viewsCount: number;
  state: State;
  featuredImagesURL: string[];
  minimumPrice: number;
  maximumPrice: number;
  category: {
    name: string;
    slug: string;
  };
};

export type BaseAddressType = {
  id: string;
  addressLine: string;
  county: string;
  province: string;
};

export const storageAcceptableParams = {
  category: "category",
  service: "service",
  avatar: "avatar",
  project: "project",
} as const;

export type StorageAcceptableParamsType = keyof typeof storageAcceptableParams;
