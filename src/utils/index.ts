import { COOKIES_EXPIRATION_TIME } from "./constants";

export function decodeObjectURL(objectURL: string) {
  const path = new URL(objectURL).pathname;
  const decodedPath = decodeURIComponent(path);
  return decodedPath;
}

export function generateJWTCookie(token: string) {
  return `token=${token}; Path=/; HttpOnly; Secure; Max-Age=${COOKIES_EXPIRATION_TIME}; SameSite=Strict`;
}

export function truncateLongText(text: string) {
  if (text.length < 20) return text;
  return text.slice(0, 20) + "...";
}