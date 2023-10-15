import { AxiosError } from "axios";
import { api, endpoints } from ".";
import { CreateActivityRequestBody } from "./types/request";

const { create } = endpoints.activity;

export async function createActivity(
  data: CreateActivityRequestBody,
  token?: string
) {
  try {
    await api.post(create, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 400) {
        throw new Error("Dados inválidos");
      }
      throw new Error("Erro ao criar a atividade");
    }
  }
}
