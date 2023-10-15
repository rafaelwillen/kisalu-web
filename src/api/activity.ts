import { AxiosError } from "axios";
import { api, endpoints } from ".";
import { ActivityState, BaseActivityType } from "./types";
import { CreateActivityRequestBody } from "./types/request";
import { getAllActivitiesResponseBody as GetAllActivitiesResponseBody } from "./types/response";

const { create, getAll, getAllFromUser, getById, changeState } =
  endpoints.activity;

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

export async function getAllUserActivities(userId: string) {
  try {
    const response = await api.get<GetAllActivitiesResponseBody>(
      getAllFromUser(userId)
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar atividades");
  }
}

export async function getActivityById(id: string) {
  try {
    const response = await api.get<BaseActivityType>(getById(id));
    return response.data;
  } catch (error) {
    return undefined;
  }
}

export async function changeActivityState(
  id: string,
  state: ActivityState,
  token?: string
) {
  try {
    await api.put(
      changeState(id),
      { state },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {
    throw new Error("Erro ao alterar o estado da atividade");
  }
}