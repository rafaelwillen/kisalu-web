import { AxiosError, HttpStatusCode } from "axios";
import { api, endpoints } from ".";
import { CreateAdminRequestBody } from "./types/request";
import {
  GetAllAdministratorsResponseBody,
  GetSingleAdministratorResponseBody,
} from "./types/response";

export async function getAllAdministrators(token?: string) {
  try {
    const response = await api.get<GetAllAdministratorsResponseBody>(
      endpoints.admin.getAll,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === HttpStatusCode.Unauthorized)
        throw new Error("Login inválido");
      throw new Error("Erro ao buscar os administradores");
    }
    throw error;
  }
}

export async function getSingleAdministrator(id: string, token?: string) {
  try {
    const response = await api.get<GetSingleAdministratorResponseBody>(
      endpoints.admin.getSingle(id),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === HttpStatusCode.Unauthorized)
        throw new Error("Login inválido");
      else if (error.response?.status === HttpStatusCode.NotFound) return null;
      throw new Error("Erro ao buscar o administrador");
    }
    throw error;
  }
}

export async function createAdministrator(
  data: CreateAdminRequestBody,
  token?: string
) {
  try {
    await api.post(endpoints.admin.create, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case HttpStatusCode.BadRequest:
          throw new Error("Dados inválidos");
        case HttpStatusCode.Conflict:
          throw new Error("Administrador já existe");
        default:
          throw new Error("Erro ao criar administrador");
      }
    }
    throw error;
  }
}

export const administratorQueryKeys = {
  getAll: ["admin/getAll"],
  getSingle: (id: string) => ["admin/getSingle", id],
};
