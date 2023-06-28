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