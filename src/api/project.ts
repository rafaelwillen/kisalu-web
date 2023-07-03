import { api, endpoints } from ".";
import { CreateProjectRequestBody } from "./types/request";
import { GetAllProjectsFromClient } from "./types/response";

const { create, getAllFromClient, toggleToAvailable } =
  endpoints.client.projects;

export async function getAllProjectsFromClient(
  token?: string
): Promise<GetAllProjectsFromClient> {
  try {
    const response = await api.get<GetAllProjectsFromClient>(getAllFromClient, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar os projectos");
  }
}

export async function toggleProjectState(id: string, token?: string) {
  try {
    await api.put(toggleToAvailable(id), undefined, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    throw new Error("Erro ao alterar o estado do projecto");
  }
}

export async function createProject(project: CreateProjectRequestBody) {
  try {
    await api.post(create, project);
  } catch (error) {
    throw new Error("Erro ao criar o projecto");
  }
}

export const projectsQueryKeys = {
  getAllProjectsFromClient: ["projects"],
};
