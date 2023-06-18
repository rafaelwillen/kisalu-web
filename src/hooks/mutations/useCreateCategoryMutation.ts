import { createCategory } from "@/api/category";
import { CreateCategoryRequestBody } from "@/api/types/request";
import { uploadCategoryImage } from "@/api/upload";
import { useAuth } from "@/context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useCreateCategoryMutation() {
  const { token } = useAuth();
  const uploadFileMutation = useMutation(
    (file: File) => uploadCategoryImage(file),
    {
      onError: (error) => {
        toast.error((error as Error).message);
      },
    }
  );
  const createCategoryMutation = useMutation(
    (category: CreateCategoryRequestBody) => createCategory(category, token),
    {
      onError: (error) => {
        toast.error((error as Error).message);
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
