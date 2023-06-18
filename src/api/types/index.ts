export type BaseCategoryType = {
  id: string;
  name: string;
  mainImageURL: string;
  bannerImageUrl: string;
  slug: string;
  description: string;
  createdAt: string;
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