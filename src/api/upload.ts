import { AxiosError, HttpStatusCode } from "axios";
import { api, endpoints } from ".";
import { StorageAcceptableParamsType } from "./types";
import { UploadCategoryImageResponseBody } from "./types/response";

export async function uploadImage(
  image: File,
  storage: StorageAcceptableParamsType
): Promise<UploadCategoryImageResponseBody | undefined> {
  const formData = new FormData();
  formData.append("file", image);
  try {
    const response = await api.post<UploadCategoryImageResponseBody>(
      endpoints.upload.uploadImage(storage),
      formData
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case HttpStatusCode.BadRequest:
          throw new Error("Imagem inválida");
        case HttpStatusCode.PayloadTooLarge:
          throw new Error("Imagem muito grande");
        default:
          throw new Error("Erro ao enviar imagem");
      }
    }
  }
}

export async function deleteImage(url: string) {
  try {
    await api.delete(endpoints.upload.deleteImage(url));
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case HttpStatusCode.BadRequest:
          throw new Error("Imagem invalida");
        case HttpStatusCode.NotFound:
          throw new Error("Imagem não encontrada");
        default:
          throw new Error("Erro ao eliminar a imagem");
      }
    }
  }
}
