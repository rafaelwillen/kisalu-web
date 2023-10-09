import { AxiosError, HttpStatusCode } from "axios";
import { api, endpoints } from ".";
import { CreateServiceRequestBody } from "./types/request";
import {
  GetAllServicesFromCategory,
  GetAllServicesFromProvider,
  GetSingleServiceByIDResponseBody,
} from "./types/response";

const {
  create,
  getAllFromProvider,
  getAllFromCategory,
  changeServiceState: changeState,
} = endpoints.provider.services;

export async function createService(
  service: CreateServiceRequestBody,
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
      if (error.response?.status === HttpStatusCode.BadRequest) {
        throw new Error("Dados inválidos");
      }
      throw new Error("Erro ao criar o serviço");
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

export async function getServicesByCategory(
  categoryId: string
): Promise<GetAllServicesFromCategory> {
  try {
    const response = await api.get<GetAllServicesFromCategory>(
      getAllFromCategory(categoryId)
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar os serviços");
  }
}

export async function deleteService(serviceId: string, token?: string) {
  try {
    await api.delete(endpoints.provider.services.deleteService(serviceId), {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === HttpStatusCode.Unauthorized) {
        throw new Error("Credenciais Inválidas");
      }
      throw new Error("Erro ao deletar o serviço");
    }
  }
}

export async function changeServiceState(serviceId: string, token?: string) {
  try {
    await api.put(
      changeState(serviceId),
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === HttpStatusCode.Unauthorized) {
        throw new Error("Credenciais Inválidas");
      }
      throw new Error("Erro ao alterar o estado do serviço");
    }
  }
}

export async function getServiceById(serviceId: string) {
  try {
    const response = await api.get<GetSingleServiceByIDResponseBody>(
      endpoints.service.getServiceById(serviceId)
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === HttpStatusCode.NotFound) return undefined;
    }
    throw new Error("Erro ao obter informações do serviço");
  }
}

export const servicesQueryKeys = {
  getAllServicesFromProvider: ["services"],
  getServicesByCategory: (categoryId: string) => [
    "services/getServicesByCategory",
    categoryId,
  ],
};
