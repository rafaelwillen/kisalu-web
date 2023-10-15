"use client";

import { createActivity as createActivityAPI } from "@/api/activity";
import { CreateActivityRequestBody } from "@/api/types/request";
import { useAuth } from "@/context/AuthContext";
import { Routes } from "@/utils/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { useServiceHireStorage } from "../localStorage/useServiceHireStorage";

const schema = z.object({
  id: z.string().uuid(),
});

type Args = {
  onSuccess?: () => void;
};

export default function useCreateActivityMutation({ onSuccess }: Args) {
  const router = useRouter();
  const params = schema.parse(useParams());
  const { token } = useAuth();
  const [get] = useServiceHireStorage();
  const mutation = useMutation(
    (data: CreateActivityRequestBody) => createActivityAPI(data, token),
    {
      onError: () => {
        toast.error("Erro ao realizar o contrato");
      },
    }
  );

  async function createActivity() {
    const data = get();
    if (!data) return;
    await mutation.mutateAsync({
      ...data,
      serviceId: params.id,
    });
    onSuccess?.();
  }

  function cancelActivity() {
    router.replace(Routes.singleService(params.id));
  }

  return {
    isLoading: mutation.isLoading,
    createActivity,
    cancelActivity,
  };
}
