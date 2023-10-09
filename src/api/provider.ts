import { UserAddressFormType } from "@/utils/schemas/userAddressSchema";
import { AxiosError, HttpStatusCode } from "axios";
import { api, endpoints } from ".";
import { CreateUserRequestBody } from "./types/request";
import {
  GetAllProviderResponseBody,
  GetProviderByIdResponseBody,
} from "./types/response";

export async function createProvider(provider: CreateUserRequestBody) {
  try {
    await api.post(endpoints.provider.create, provider);
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
          throw new Error("Erro ao criar prestador");
      }
    }
  }
}

export async function updateProviderAvatarImage(url: string, token?: string) {
  try {
    await api.put(
      endpoints.provider.updateAvatarImage,
      { url },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case HttpStatusCode.BadRequest:
          throw new Error("Dados inválidos");
        case HttpStatusCode.Unauthorized:
          throw new Error("Não autorizado");
        default:
          throw new Error("Erro ao atualizar avatar");
      }
    }
  }
}

export async function updateProviderAddress(
  address: UserAddressFormType,
  token?: string
) {
  try {
    await api.put(endpoints.provider.updateAddress, address, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case HttpStatusCode.BadRequest:
          throw new Error("Dados inválidos");
        case HttpStatusCode.NotFound:
          throw new Error("Não autorizado");
        default:
          throw new Error("Erro ao atualizar endereço");
      }
    }
  }
}

export async function getAllProviders() {
  try {
    const response = await api.get<GetAllProviderResponseBody>(
      endpoints.provider.getAll
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar os provedores");
  }
}

export async function getProviderById(id: string) {
  try {
    const response = await api.get<GetProviderByIdResponseBody>(
      endpoints.provider.getSingle(id)
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === HttpStatusCode.NotFound) return undefined;
    }
    throw new Error("Erro ao buscar provedor");
  }
}

