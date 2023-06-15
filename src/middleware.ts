import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUser } from "./api/authentication";
import { Routes } from "./utils/constants/routes";

export async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  if (pathName.startsWith("/admin") && !pathName.includes("/admin/login")) {
    return await ensureAdminAuthenticated(request);
  }
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
