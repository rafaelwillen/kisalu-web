import { trendingService } from "@/mock/projects";

export type ServiceCardProps = (typeof trendingService)[0];

export type BannerProps = {
  imageUrl?: string;
  name: string;
  description?: string;
};