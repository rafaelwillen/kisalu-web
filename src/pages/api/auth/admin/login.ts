import AuthenticationAPI from "@/api/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { ZodError, z } from "zod";

export default async function APIHandler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const method = request.method;
  switch (method) {
    case "POST":
      await POST(request, response);
      break;

    default:
      response.status(405);
      break;
  }
}

async function POST(request: NextApiRequest, response: NextApiResponse) {
  try {
    const schema = z.object({
      username: z.string().nonempty(),
      password: z.string().nonempty(),
    });
    const body = schema.parse(request.body);
    const apiResponse = await AuthenticationAPI.loginAdmin(body);
    if (!apiResponse) {
      response.status(401);
      response.send({
        message: "Usuário ou senha inválidos",
      });
      return;
    }
    const { token } = apiResponse;
    const cookiesExpiresIn = 60 * 60 * 24 * 7; // 7 days
    response
      .setHeader(
        "set-cookie",
        `kisalu@token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${cookiesExpiresIn}`
      )
      .end();
  } catch (error) {
    console.log(error);

    if (error instanceof ZodError) {
      response.status(400);
      response.send({
        message: "Usuário ou senha inválidos",
      });
      return;
    }
    response.status(500);
    response.send({
      message: "Ocorreu um erro ao fazer o login. Tente novamente.",
    });
  }
}
