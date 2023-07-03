import { AxiosError, HttpStatusCode } from "axios";
import { api, endpoints } from ".";
import { CreateCategoryRequestBody } from "./types/request";
import {
  GetAllCategoriesResponseBody,
  GetAllPublicCategoriesResponseBody,
  GetCategoryFromSearchQueryResponseBody,
  GetMostPopularCategoriesResponseBody,
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
      switch (error.response?.status) {
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

export async function getAllCategoriesFromAdmin(token?: string) {
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

export async function getSingleCategoryByIdFromAdmin(
  id: string,
  token?: string
) {
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
      switch (error.response?.status) {
        case HttpStatusCode.BadRequest:
          throw new Error("ID da categoria inválido");
        case HttpStatusCode.NotFound:
          return undefined;
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
      switch (error.response?.status) {
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

export async function queryCategoryByName(
  name: string
): Promise<GetCategoryFromSearchQueryResponseBody> {
  try {
    const response = await api.get<GetCategoryFromSearchQueryResponseBody>(
      endpoints.category.queryByName,
      {
        params: { name },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar categorias");
  }
}

export async function getAllPublicCategories(): Promise<GetAllPublicCategoriesResponseBody> {
  try {
    const response = await api.get<GetAllPublicCategoriesResponseBody>(
      endpoints.category.getAll
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar categorias");
  }
}

export async function getMostPopularCategories(): Promise<GetMostPopularCategoriesResponseBody> {
  try {
    const response = await api.get<GetMostPopularCategoriesResponseBody>(
      endpoints.category.getMostPopular
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar categorias");
  }
}

export const categoryQueryKeys = {
  getAllAdmin: ["admin/category/getAll"],
  getSingleAdmin: (categoryId: string) => [
    "admin/category/getSingle",
    categoryId,
  ],
  queryCategoryByName: (name: string) => ["category/queryByName", name],
  getAllPublicCategories: ["category/getAllPublicCategories"],
  getMostPopularCategories: ["category/getMostPopularCategories"],
};
