import { AxiosError, HttpStatusCode } from "axios";
import { api, endpoints } from ".";
import { GetAllAdministratorsResponseBody } from "./types/response";

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

export const administratorQueryKeys = {
  getAll: ["admin/getAll"],
};
