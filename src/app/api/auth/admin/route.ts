import { authenticateAdministrator } from "@/api/authentication";
import { generateJWTCookie } from "@/utils";
import { loginSchema } from "@/utils/schemas/loginSchema";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request: NextRequest) {
  try {
    const body = loginSchema.parse(await request.json());
    const userCredentials = await authenticateAdministrator(body);
    return NextResponse.json(userCredentials, {
      headers: {
        "Set-Cookie": generateJWTCookie(userCredentials.token),
      },
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }
    if (error instanceof AxiosError) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }
  }
}
