import { createCategory } from "@/api/category";
import { CreateCategoryRequestBody } from "@/api/types/request";
import { deleteCategoryImage, uploadCategoryImage } from "@/api/upload";
import { useAuth } from "@/context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useCreateCategoryMutation() {
  const { token } = useAuth();
  const uploadFileMutation = useMutation((file: File) =>
    uploadCategoryImage(file)
  );
  const createCategoryMutation = useMutation(
    (category: CreateCategoryRequestBody) => createCategory(category, token),
    {
      onError: async (error, category) => {
        toast.error((error as Error).message);
        await deleteImages([category.bannerImageURL, category.mainImageURL]);
      },
    }
  );

  const fileDeletionMutation = useMutation((url: string) =>
    deleteCategoryImage(url)
  );

  async function deleteImages(imagesURLs: string[]) {
    const [bannerImageFileName, mainImageFileName] = imagesURLs.map((url) =>
      decodeObjectURL(url).split("/").pop()
    );
    if (!bannerImageFileName || !mainImageFileName) return;
    await Promise.all([
      fileDeletionMutation.mutateAsync(bannerImageFileName),
      fileDeletionMutation.mutateAsync(mainImageFileName),
    ]);
  }

  const isLoading =
    uploadFileMutation.isLoading ||
    createCategoryMutation.isLoading ||
    fileDeletionMutation.isLoading;
  return {
    isLoading,
    uploadFileMutation,
    createCategoryMutation,
  };
}

function decodeObjectURL(objectURL: string) {
  const path = new URL(objectURL).pathname;
  const decodedPath = decodeURIComponent(path);
  return decodedPath;
}
