import { createService } from "@/api/services";
import { CreateServiceRequestBody } from "@/api/types/request";
import { deleteImage, uploadImage } from "@/api/upload";
import { useAuth } from "@/context/AuthContext";
import { decodeObjectURL } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useCreateServiceMutation() {
  const { token } = useAuth();
  const uploadImageMutation = useMutation((file: File) =>
    uploadImage(file, "service")
  );
  const deleteImageMutation = useMutation((url: string) => deleteImage(url));
  const createServiceMutation = useMutation(
    (service: CreateServiceRequestBody) => createService(service, token),
    {
      onError: async (error, { bannerImageURL, featuredImagesURL }) => {
        toast.error((error as Error).message);
        if (bannerImageURL)
          await deleteImages([bannerImageURL, ...featuredImagesURL]);
        else await deleteImages(featuredImagesURL);
      },
    }
  );

  async function deleteImages(imagesURLs: string[]) {
    const imageURLs = imagesURLs.map((url) =>
      decodeObjectURL(url).split("/").pop()
    );
    await Promise.all(
      imageURLs
        .filter((url) => url !== undefined)
        .map((url) => deleteImage(url!))
    );
  }

  const isLoading =
    uploadImageMutation.isLoading ||
    deleteImageMutation.isLoading ||
    createServiceMutation.isLoading;
  return {
    isLoading,
    uploadImage: uploadImageMutation.mutateAsync,
    createService: createServiceMutation.mutateAsync,
  };
}
