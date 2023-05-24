import CategoryAPI, {
  CreateCategoryRequestDataType,
} from "@/api/admin/category";
import UploadAPI from "@/api/upload";
import { useMutation } from "@tanstack/react-query";

export default function useCreateCategoryMutation() {
  const uploadFileMutation = useMutation(
    (file: File) => UploadAPI.uploadCategoryImage(file),
    {
      onError: (error) => {
        console.error(error);
      },
    }
  );
  const createCategoryMutation = useMutation(
    (category: CreateCategoryRequestDataType) => CategoryAPI.create(category),
    {
      onError: (error) => {
        console.error(error);
      },
      onSuccess: () => {
        alert("Category created successfully");
        // TODO: Handle success
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
