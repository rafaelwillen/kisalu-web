import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  if (pathName.startsWith("/admin") && !pathName.includes("/admin/login")) {
    return await ensureAdminAuthenticated(request);
  }
  return NextResponse.next();
}

async function ensureAdminAuthenticated(request: NextRequest) {
  // TODO: Check if user is authenticated
  console.info("TODO: Check if user is authenticated");
  return NextResponse.next();
}
