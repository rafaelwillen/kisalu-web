import { AxiosError, HttpStatusCode } from "axios";
import { api, endpoints } from "..";
import { CreateServiceType } from "../types/request";
import { GetAllServicesFromProvider } from "../types/response";

const { create, getAllFromProvider } = endpoints.provider.services;

export async function createService(
  service: CreateServiceType,
  token?: string
) {
  try {
    await api.post(create, service, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case HttpStatusCode.BadRequest:
          throw new Error("Dados inválidos");
        default:
          throw new Error("Erro ao criar o serviço");
      }
    }
  }
}

export async function getAllServicesFromProvider(
  token?: string
): Promise<GetAllServicesFromProvider> {
  try {
    const response = await api.get<GetAllServicesFromProvider>(
      getAllFromProvider,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar os serviços");
  }
}
