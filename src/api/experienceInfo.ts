import { ProviderExperienceFormType } from "@/utils/schemas/providerExperienceSchema";
import { AxiosError, HttpStatusCode } from "axios";
import { api } from ".";

export type ExperienceInfo = {
  id: string;
  institutionName: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  type: ExperienceType;
};
export type ExperienceType = "Work" | "Education";

const endpoints = {
  getAllFromProvider: "/provider/experience",
  create: "/provider/experience",
  delete: (id: string) => `/provider/experience/${id}`,
  update: (id: string) => `/provider/experience/${id}`,
} as const;

export const queryKeys = {
  allExperiencesFromProvider: "allExperiencesFromProvider",
};

export async function getAllExperiencesFromProvider(token?: string) {
  try {
    const response = await api.get<ExperienceInfo[]>(
      endpoints.getAllFromProvider,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === HttpStatusCode.Unauthorized)
        throw new Error("Credenciais Inválidas");
    }
    throw new Error("Erro ao buscar experiências do prestador");
  }
}

export async function createExperience(
  data: ProviderExperienceFormType,
  token?: string
) {
  try {
    await api.post(endpoints.create, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case HttpStatusCode.Unauthorized:
          throw new Error("Credenciais Inválidas");
        case HttpStatusCode.BadRequest:
          throw new Error("Dados inválidos");
        default:
          throw new Error("Erro ao criar a experiência do prestador");
      }
    }
  }
}

export async function deleteExperience(id: string, token?: string) {
  try {
    await api.delete(endpoints.delete(id), {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case HttpStatusCode.NotFound:
          throw new Error("Experiência não encontrada");
        case HttpStatusCode.Unauthorized:
          throw new Error("Credenciais Inválidas");
        case HttpStatusCode.Forbidden:
          throw new Error(
            "Você não tem permissão para apagar essa experiência"
          );
        default:
          throw new Error("Erro ao apagar experiência do prestador");
      }
    }
  }
}

export async function updateExperience(
  data: Omit<ProviderExperienceFormType, "type">,
  id: string,
  token?: string
) {
  try {
    await api.put(endpoints.update(id), data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case HttpStatusCode.NotFound:
          throw new Error("Experiência não encontrada");
        case HttpStatusCode.Unauthorized:
          throw new Error("Credenciais Inválidas");
        case HttpStatusCode.Forbidden:
          throw new Error(
            "Você não tem permissão para actualizar essa experiência"
          );
        default:
          throw new Error("Erro ao editar experiência do prestador");
      }
    }
  }
}
