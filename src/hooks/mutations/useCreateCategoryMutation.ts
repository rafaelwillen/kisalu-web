import CategoryAPI from "@/api/admin/category";
import { CreateCategoryRequestDataType } from "@/api/admin/types";
import UploadAPI from "@/api/upload";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export default function useCreateCategoryMutation() {
  const uploadFileMutation = useMutation(
    (file: File) => UploadAPI.uploadCategoryImage(file),
    {
      onError: (error) => {
        toast.error((error as Error).message);
      },
    }
  );
  const createCategoryMutation = useMutation(
    (category: CreateCategoryRequestDataType) => CategoryAPI.create(category),
    {
      onError: (error) => {
        toast.error((error as Error).message);
      },
      onSuccess: () => {
        toast.success("Categoria criada com sucesso");
      },
    }
  );
  const isLoading =
    uploadFileMutation.isLoading || createCategoryMutation.isLoading;
  return {
    isLoading,
    uploadFileMutation,
    createCategoryMutation,
  };
}
