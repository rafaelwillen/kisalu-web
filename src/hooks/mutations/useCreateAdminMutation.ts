import { createAdministrator } from "@/api/admin";
import { CreateAdminRequestBody } from "@/api/types/request";
import { deleteImage, uploadImage } from "@/api/upload";
import { useAuth } from "@/context/AuthContext";
import { decodeObjectURL } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useCreateAdminMutation() {
  const { token } = useAuth();
  const uploadFileMutation = useMutation((file: File) =>
    uploadImage(file, "avatar")
  );
  const createAdminMutation = useMutation(
    (admin: CreateAdminRequestBody) => createAdministrator(admin, token),
    {
      onError: async (error, { avatarImageURL }) => {
        toast.error((error as Error).message);
        await deleteImages(avatarImageURL);
      },
    }
  );
  const fileDeletionMutation = useMutation((url: string) => deleteImage(url));

  async function deleteImages(avatarImageURL: string) {
    const fileName = decodeObjectURL(avatarImageURL).split("/").pop();
    if (!fileName) return;
    fileDeletionMutation.mutateAsync(fileName);
  }
  const isLoading =
    uploadFileMutation.isLoading ||
    createAdminMutation.isLoading ||
    fileDeletionMutation.isLoading;
  return {
    isLoading,
    uploadFileMutation,
    createAdminMutation,
  };
}
