export type BaseCategoryType = {
  id: string;
  name: string;
  cardImageUrl: string;
  bannerImageUrl: string;
  slug: string;
  description: string;
  createdAt: string;
};

export type Role = "Administrator" | "Provider" | "Client";
export type Gender = "Male" | "Female";