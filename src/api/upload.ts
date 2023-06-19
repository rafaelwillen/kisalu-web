import { AxiosError } from "axios";
import { api, endpoints } from ".";
import { UploadCategoryImageResponseBody } from "./types/response";

export async function uploadCategoryImage(
  image: File
): Promise<UploadCategoryImageResponseBody | undefined> {
  const formData = new FormData();
  formData.append("image", image);
  try {
    const response = await api.post<UploadCategoryImageResponseBody>(
      endpoints.upload.categoryImage,
      formData
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case 400:
          throw new Error("Imagem inválida");
        case 413:
          throw new Error("Imagem muito grande");
        default:
          throw new Error("Erro ao enviar imagem");
      }
    }
  }
}

export async function deleteCategoryImage(url: string) {
  try {
    await api.delete(`/upload/category/${url}`);
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case 400:
          throw new Error("Imagem invalida");
        case 404:
          throw new Error("Imagem não encontrada");
        default:
          throw new Error("Erro ao eliminar a imagem");
      }
    }
  }
}