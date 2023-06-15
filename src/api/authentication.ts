import HTTPError from "@/utils/HTTPError";
import { AxiosError, HttpStatusCode } from "axios";
import { api, endpoints, nextServerAPI } from ".";
import { AuthenticationRequestBody } from "./types/request";
import { AdminAuthenticationResponseBody } from "./types/response";

export async function authenticateAdministrator(
  body: AuthenticationRequestBody
) {
  const response = await api.post<AdminAuthenticationResponseBody>(
    endpoints.authentication.loginAdmin,
    body
  );
  return response.data;
}

export async function authenticateAdministratorNextServer(
  body: AuthenticationRequestBody
) {
  try {
    const response = await nextServerAPI.post<
      Pick<AdminAuthenticationResponseBody, "user">
    >(endpoints.authentication.loginAdminNext, body);
    return response.data;
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case HttpStatusCode.BadRequest:
          throw new HTTPError(error.response?.status, "Dados inválidos");
        case HttpStatusCode.Unauthorized:
          throw new HTTPError(error.response?.status, "Credenciais inválidas");
        default:
          throw new HTTPError(
            HttpStatusCode.InternalServerError,
            "Erro no servidor"
          );
      }
    }
    throw error;
  }
}
