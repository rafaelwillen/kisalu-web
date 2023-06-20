import { AxiosError, HttpStatusCode } from "axios";
import { api, endpoints } from ".";
import { CreateCategoryRequestBody } from "./types/request";
import {
  GetAllCategoriesResponseBody,
  GetSingleCategoryResponseBodyType,
} from "./types/response";

export async function createCategory(
  category: CreateCategoryRequestBody,
  token?: string
) {
  try {
    await api.post(endpoints.admin.category.create, category, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.status) {
        case HttpStatusCode.BadRequest:
          throw new Error("Dados inválidos");
        case HttpStatusCode.Conflict:
          throw new Error("Categoria já existe");
        default:
          throw new Error("Erro ao criar categoria");
      }
    }
  }
}

export async function getAllCategories(token?: string) {
  try {
    const response = await api.get<GetAllCategoriesResponseBody>(
      endpoints.admin.category.getAll,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar categorias");
  }
}

export async function getSingleCategoryById(id: string, token?: string) {
  try {
    const response = await api.get<GetSingleCategoryResponseBodyType>(
      endpoints.admin.category.getSingle(id),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.status) {
        case HttpStatusCode.BadRequest:
          throw new Error("ID da categoria inválido");
        case HttpStatusCode.NotFound:
          throw new Error("Categoria não encontrada");
        default:
          throw new Error("Erro ao buscar categoria");
      }
    }
  }
}

export async function deleteCategory(id: string, token?: string) {
  try {
    await api.delete(endpoints.admin.category.delete(id), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.status) {
        case HttpStatusCode.BadRequest:
          throw new Error("ID da categoria inválido");
        case HttpStatusCode.NotFound:
          throw new Error("Categoria não encontrada");
        default:
          throw new Error("Erro ao eliminar categoria");
      }
    }
  }
}

export const categoryQueryKeys = {
  getAllAdmin: ["admin/category/getAll"],
  getSingleAdmin: (categoryId: string) => [
    "admin/category/getSingle",
    categoryId,
  ],
};
