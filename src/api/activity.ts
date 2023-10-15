import { AxiosError } from "axios";
import { api, endpoints } from ".";
import { CreateActivityRequestBody } from "./types/request";
import { getAllActivitiesResponseBody as GetAllActivitiesResponseBody } from "./types/response";

const { create, getAll } = endpoints.activity;

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

export async function getAllActivities() {
  try {
    const response = await api.get<GetAllActivitiesResponseBody>(getAll);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar atividades");
  }
}