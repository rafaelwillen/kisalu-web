import { AxiosError } from "axios";
import { api, endpoints } from ".";
import { CreateCategoryRequestBody } from "./types/request";
import {
  GetAllCategoriesResponseBody,
  GetSingleCategoryResponseBodyType,
} from "./types/response";

export async function createCategory(category: CreateCategoryRequestBody) {
  try {
    await api.post(endpoints.admin.category.create, category);
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.status) {
        case 400:
          throw new Error("Dados inválidos");
        default:
          throw new Error("Erro ao criar categoria");
      }
    }
  }
}

export async function getAllCategories() {
  try {
    const response = await api.get<GetAllCategoriesResponseBody>(
      endpoints.admin.category.getAll
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar categorias");
  }
}

export async function getSingleCategoryById(id: string) {
  try {
    const response = await api.get<GetSingleCategoryResponseBodyType>(
      endpoints.admin.category.getSingle(id)
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.status) {
        case 400:
          throw new Error("ID da categoria inválido");
        case 404:
          throw new Error("Categoria não encontrada");
        default:
          throw new Error("Erro ao buscar categoria");
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
