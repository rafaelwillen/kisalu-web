import { NewCategoryFormType } from "@/utils/schemas/newCategorySchema";
import { AxiosError } from "axios";
import api from "..";

export type CreateCategoryRequestDataType = Pick<
  NewCategoryFormType,
  "name" | "description"
> & { cardImageUrl: string; bannerImageUrl: string };

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

const CategoryAPI = {
  create,
};

export default CategoryAPI;
