import { Routes } from "@/utils/constants/routes";
import { NextRequest, NextResponse } from "next/server";
import AuthenticationAPI from "./api/auth";

export async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    !request.nextUrl.pathname.includes("/admin/login")
  ) {
    return await ensureAdminAuthenticated(request);
  }
  return NextResponse.next();
}

async function ensureAdminAuthenticated(request: NextRequest) {
  // TODO: Check if user is authenticated
  const token = request.cookies.get("kisalu@token")?.value;
  const callBackURL = new URL(request.nextUrl.href);
  const redirectTo = new URL(
    `${Routes.adminLogin}?callback=${callBackURL.pathname}`,
    request.nextUrl.origin
  );
  if (!token) return NextResponse.redirect(redirectTo, {});
  const tokenPayload = await AuthenticationAPI.verifyToken(token);
  if (!tokenPayload) return NextResponse.redirect(redirectTo, {});
  return NextResponse.next();
}
