import HTTPError from "@/utils/HTTPError";
import { AxiosError, HttpStatusCode } from "axios";
import { API_URL, api, endpoints, nextServerAPI } from ".";
import { AuthenticationRequestBody } from "./types/request";
import {
  AdminAuthenticationResponseBody,
  UserAuthenticationResponseBody,
} from "./types/response";

export async function authenticateAdministrator(
  body: AuthenticationRequestBody
) {
  const response = await api.post<AdminAuthenticationResponseBody>(
    endpoints.authentication.loginAdmin,
    body
  );
  return response.data;
}

export async function authenticateUser(body: AuthenticationRequestBody) {
  const response = await api.post<AdminAuthenticationResponseBody>(
    endpoints.authentication.loginUser,
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
    throw handleNextAuthenticationError(error);
  }
}

export async function authenticateUserNextServer(
  body: AuthenticationRequestBody
) {
  try {
    const response = await nextServerAPI.post<
      Pick<AdminAuthenticationResponseBody, "user">
    >(endpoints.authentication.loginUserNext, body);
    return response.data;
  } catch (error) {
    throw handleNextAuthenticationError(error);
  }
}

export async function getAuthenticatedUser(token: string) {
  try {
    const response = await fetch(
      API_URL?.concat(endpoints.authentication.currentUser)!,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok)
      throw new HTTPError(response.status, "Erro ao obter usuário autenticado");
    return (await response.json()) as UserAuthenticationResponseBody;
  } catch (error) {
    console.log(error);
    if (error instanceof HTTPError) throw error;
    throw new HTTPError(HttpStatusCode.InternalServerError, "Erro no servidor");
  }
}

export const authenticationQueryKeys = {
  currentUser: ["currentUser"],
};

function handleNextAuthenticationError(error: unknown) {
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