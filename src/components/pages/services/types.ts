export type BannerProps = {
  imageUrl?: string;
  name: string;
  description?: string;
};

export type ServiceProductBannerProps = {
  bannerImageUrl: string;
  name: string;
  serviceOwner: {
    name: string;
    avatarUrl: string;
  };
  rating: number;
  orderCount: number;
  views: number;
};

export type LocationAndDurationInfoProps = {
  location: string;
  mapLink?: string;
  duration: string;
};

export type ServiceImagesSliderProps = {
  imagesUrl: string[];
};

export type ProviderQuickInfo = {
  name: string;
  avatarUrl: string;
  review: {
    averageRating: number;
    totalReview: number;
  };
  location: string;
  successRate: number;
};

export type ServiceInfoProps = {
  description: string;
};

export type UsersReviewsProps = {
  rating: {
    averageRating: number;
    classification: string;
    totalReview: number;
    stars: {
      1: {
        total: number;
        percentage: number;
      };
      2: {
        total: number;
        percentage: number;
      };
      3: {
        total: number;
        percentage: number;
      };
      4: {
        total: number;
        percentage: number;
      };
      5: {
        total: number;
        percentage: number;
      };
    };
  };
  reviews: Reviews[];
};

type Reviews = {
  avatarUrl?: string;
  name: string;
  rating: number;
  publishedDate: Date;
  description: string;
};
