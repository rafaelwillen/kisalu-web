import { authenticateUserNextServer } from "@/api/authentication";
import { createClient } from "@/api/client";
import { createProvider } from "@/api/provider";
import { CreateUserRequestBody } from "@/api/types/request";
import { Routes } from "@/utils/constants/routes";
import { LoginFormType } from "@/utils/schemas/loginSchema";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function useCreateUserMutation(
  userType: "client" | "provider",
  redirectTo?: string
) {
  const createUserMutation = useMutation((data: CreateUserRequestBody) =>
    userType === "client" ? createClient(data) : createProvider(data)
  );
  const authenticateUserMutation = useMutation((data: LoginFormType) =>
    authenticateUserNextServer(data)
  );
  const router = useRouter();

  async function createUser(data: CreateUserRequestBody) {
    try {
      await createUserMutation.mutateAsync(data);
      await authenticateUserMutation.mutateAsync({
        email: data.email,
        password: data.password,
      });
      router.replace(redirectTo ?? Routes.home);
      router.refresh();
      toast.success("Conta criada com sucesso!");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  const isLoading =
    createUserMutation.isLoading || authenticateUserMutation.isLoading;

  return {
    createUser,
    isLoading,
  };
}
