import { NewCategoryFormType } from "@/utils/schemas/newCategorySchema";
import { AxiosError } from "axios";
import api from "..";

export type CreateCategoryRequestDataType = Pick<
  NewCategoryFormType,
  "name" | "description"
> & { cardImageUrl: string; bannerImageUrl: string };

type BaseCategoryType = {
  id: string;
  name: string;
  cardImageUrl: string;
  bannerImageUrl: string;
};

export type GetAllCategoriesResponseDataType = (Omit<
  BaseCategoryType,
  "bannerImageUrl"
> & {
  numberOfProjects: number;
  numberOfServices: number;
})[];

export type GetSingleCategoryResponseDataType = BaseCategoryType & {
  numberOfProjects: number;
  numberOfServices: number;
};

async function create(category: CreateCategoryRequestDataType) {
  try {
    await api.post("/admin/category", category);
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
      "/admin/category"
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar categorias");
  }
}

async function getSingle(id: string) {
  try {
    const response = await api.get<GetSingleCategoryResponseDataType>(
      `/admin/category/${id}`
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
  getSingle: (id: string) => [`category/getSingle/${id}`, id],
};

const CategoryAPI = {
  create,
  getAll,
  getSingle,
};

export default CategoryAPI;
