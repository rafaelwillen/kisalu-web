import { AxiosError } from "axios";
import { api, endpoints } from "..";
import {
  CreateCategoryRequestDataType,
  GetAllCategoriesResponseDataType,
  GetSingleCategoryResponseDataType,
} from "./types";

const categoryEndpoints = endpoints.admin.category;

async function create(category: CreateCategoryRequestDataType) {
  try {
    await api.post(categoryEndpoints.create, category);
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

async function getAll() {
  try {
    const response = await api.get<GetAllCategoriesResponseDataType>(
      categoryEndpoints.getAll
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar categorias");
  }
}

async function getSingle(id: string) {
  try {
    const response = await api.get<GetSingleCategoryResponseDataType>(
      categoryEndpoints.getSingle(id)
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

export const categoriesQueryKeys = {
  getAll: "category/getAll",
  getSingle: (id: string) => [`category/getSingle`, id],
};

const CategoryAPI = {
  create,
  getAll,
  getSingle,
};

export default CategoryAPI;
