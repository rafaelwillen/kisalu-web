import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUser } from "./api/authentication";
import { Routes } from "./utils/constants/routes";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === Routes.logoutAdmin) return await signOut(request, true);
  if (pathname === Routes.logout) return await signOut(request, false);
  if (pathname.startsWith("/admin") && !pathname.includes("/admin/login"))
    return await ensureAdminAuthenticated(request);
  if (pathname.startsWith(Routes.providerDashboard))
    return await ensureProviderAuthenticated(request);
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

async function signOut(request: NextRequest, isAdmin: boolean) {
  const redirectURL = new URL(
    isAdmin ? Routes.adminLogin : Routes.home,
    request.nextUrl.origin
  );
  return NextResponse.redirect(redirectURL, {
    headers: {
      "Set-Cookie": `token=; Path=/; HttpOnly; Expires=Thu, 01 Jan 1970 00:00:00 GMT`,
    },
  });
}

async function ensureProviderAuthenticated(request: NextRequest) {
  const loginRedirectURL = new URL(Routes.login, request.nextUrl.origin);
  const token = request.cookies.get("token")?.value;
  if (!token) return NextResponse.redirect(loginRedirectURL);
  const userPayload = await getAuthenticatedUser(token);
  if (!userPayload || userPayload.role !== "Provider")
    return NextResponse.redirect(loginRedirectURL);
  return NextResponse.next();
}