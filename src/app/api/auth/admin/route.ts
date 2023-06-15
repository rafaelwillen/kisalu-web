import { authenticateAdministrator } from "@/api/authentication";
import { NextRequest, NextResponse } from "next/server";
import { ZodError, z } from "zod";

export async function POST(request: NextRequest) {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().nonempty(),
  });
  try {
    const body = schema.parse(await request.json());
    const { token, user } = await authenticateAdministrator(body);
    const cookiesExpiresIn = 60 * 60 * 24 * 1; // 1 day
    return NextResponse.json(user, {
      headers: {
        "Set-Cookie": `token=${token}; Path=/; HttpOnly; Max-Age=${cookiesExpiresIn}; SameSite=Strict`,
      },
    });
  } catch (error) {
    console.error(error);
    if (error instanceof ZodError) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }
  }
}
