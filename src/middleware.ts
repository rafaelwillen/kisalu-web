import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUser } from "./api/authentication";
import { Routes } from "./utils/constants/routes";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === Routes.logoutAdmin) return await signOutAdmin(request);
  if (pathname.startsWith("/admin") && !pathname.includes("/admin/login"))
    return await ensureAdminAuthenticated(request);
  return NextResponse.next();
}

async function ensureAdminAuthenticated(request: NextRequest) {
  const loginRedirectURL = new URL(Routes.adminLogin, request.nextUrl.origin);
  const token = request.cookies.get("token")?.value;
  if (!token) return NextResponse.redirect(loginRedirectURL);
  const userPayload = await getAuthenticatedUser(token);
  if (!userPayload || userPayload.role !== "Administrator")
    return NextResponse.redirect(loginRedirectURL);
  return NextResponse.next();
}

async function signOutAdmin(request: NextRequest) {
  const loginRedirectURL = new URL(Routes.adminLogin, request.nextUrl.origin);
  return NextResponse.redirect(loginRedirectURL, {
    headers: {
      "Set-Cookie": `token=; Path=/; HttpOnly; Expires=Thu, 01 Jan 1970 00:00:00 GMT`,
    },
  });
}