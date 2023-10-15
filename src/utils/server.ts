import { cookies } from "next/headers";

export function getAuthenticationToken() {
  return cookies().get("token")?.value;
}
