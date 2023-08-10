import HTTPError from "@/utils/HTTPError";
import { AxiosError, HttpStatusCode } from "axios";
import { API_URL, api, endpoints, nextServerAPI } from ".";
import {
  AuthenticationRequestBody,
  UserPasswordResetRequestBody,
} from "./types/request";
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
    const response = await nextServerAPI.post<AdminAuthenticationResponseBody>(
      endpoints.authentication.loginAdminNext,
      body
    );
    return response.data;
  } catch (error) {
    throw handleNextAuthenticationError(error);
  }
}

export async function authenticateUserNextServer(
  body: AuthenticationRequestBody
) {
  try {
    const response = await nextServerAPI.post<AdminAuthenticationResponseBody>(
      endpoints.authentication.loginUserNext,
      body
    );
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

export async function resetUserPassword(
  data: UserPasswordResetRequestBody,
  token?: string
) {
  try {
    await api.put(endpoints.authentication.changeUserPassword, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case HttpStatusCode.BadRequest:
          throw new Error("Dados inválidos");
        case HttpStatusCode.Unauthorized:
          throw new Error("Password antiga inválida");
        case HttpStatusCode.NotFound:
          throw new Error("Credenciais inválidas");
        default:
          throw new Error("Erro no servidor");
      }
    }
  }
}

export const authenticationQueryKeys = {
  currentUser: (token: string) => [endpoints.authentication.currentUser, token],
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