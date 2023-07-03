import { AxiosError, HttpStatusCode } from "axios";
import { api, endpoints } from ".";
import { CreateUserRequestBody } from "./types/request";

const { create } = endpoints.client;

export async function createClient(client: CreateUserRequestBody) {
  try {
    await api.post(create, client);
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case HttpStatusCode.BadRequest:
          throw new Error("Dados inválidos");
        case HttpStatusCode.Conflict:
          if (
            error.response?.data.message ===
            "An user with this email already exists"
          ) {
            throw new Error("Já existe um usuário com este email");
          }
          throw new Error("Já existe um usuário com este número de telefone");
        default:
          throw new Error("Erro ao criar cliente");
      }
    }
  }
}
