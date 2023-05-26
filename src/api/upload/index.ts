import { AxiosError } from "axios";
import { api, endpoints } from "..";
import { UploadCategoryImageResponseDataType } from "./types";

const uploadEndpoints = endpoints.upload;

async function uploadCategoryImage(
  image: File
): Promise<UploadCategoryImageResponseDataType | undefined> {
  const formData = new FormData();
  formData.append("image", image);
  try {
    const response = await api.post<UploadCategoryImageResponseDataType>(
      uploadEndpoints.categoryImage,
      formData
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      switch (error.status) {
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

const UploadAPI = {
  uploadCategoryImage,
};

export default UploadAPI;
