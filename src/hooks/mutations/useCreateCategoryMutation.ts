export default function useCreateCategoryMutation() {
  // const uploadFileMutation = useMutation(
  //   (file: File) => UploadAPI.uploadCategoryImage(file),
  //   {
  //     onError: (error) => {
  //       toast.error((error as Error).message);
  //     },
  //   }
  // );
  // const createCategoryMutation = useMutation(
  //   (category: CreateCategoryRequestDataType) => CategoryAPI.create(category),
  //   {
  //     onError: (error) => {
  //       toast.error((error as Error).message);
  //     },
  //     onSuccess: () => {
  //       toast.success("Categoria criada com sucesso");
  //     },
  //   }
  // );
  // const isLoading =
  //   uploadFileMutation.isLoading || createCategoryMutation.isLoading;
  return {
    isLoading: false,
    uploadFileMutation: {},
    createCategoryMutation: {},
  };
}
