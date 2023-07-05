import { subYears } from "date-fns";

export const MAX_IMAGE_FILE = 5 * 1024 * 1024; // 5MB

export const IMAGE_MIME_TYPES = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "image/webp",
];

export const DEFAULT_USER_AVATAR_API_URL =
  "https://api.dicebear.com/6.x/notionists/png";

export const ADULT_DATE_OF_BIRTH = subYears(new Date(), 17);
