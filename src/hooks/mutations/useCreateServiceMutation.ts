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
      onError: async (error, { bannerImageURL }) => {
        toast.error((error as Error).message);
        if (bannerImageURL) await deleteImages([bannerImageURL]);
      },
    }
  );
  async function deleteImages(imagesURLs: string[]) {
    const [bannerImageFilename] = imagesURLs.map((url) =>
      decodeObjectURL(url).split("/").pop()
    );
    if (!bannerImageFilename) return;
    await deleteImageMutation.mutateAsync(bannerImageFilename);
  }
  const isLoading =
    uploadImageMutation.isLoading ||
    deleteImageMutation.isLoading ||
    createServiceMutation.isLoading;
  return {
    isLoading,
    uploadBannerImage: uploadImageMutation.mutateAsync,
    createService: createServiceMutation.mutateAsync,
  };
}
