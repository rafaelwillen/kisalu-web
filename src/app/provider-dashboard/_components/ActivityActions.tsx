"use client";

import { changeActivityState } from "@/api/activity";
import { ActivityState } from "@/api/types";
import { Routes } from "@/utils/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

type Props = {
  activityId: string;
  activityState: ActivityState;
  token: string;
};

export default function ActivityActions({
  activityId,
  activityState,
  token,
}: Props) {
  const router = useRouter();
  const { mutateAsync, isLoading } = useMutation(
    (state: ActivityState) => changeActivityState(activityId, state, token),
    {
      onSuccess: () => {
        router.replace(Routes.providerDashboard);
      },
    }
  );

  return (
    <div className="col-start-2 space-y-3">
      <h2 className="text-center">Ações</h2>
      {activityState === "OnHold" && (
        <div className="flex justify-center space-x-4">
          <button
            disabled={isLoading}
            onClick={() =>
              toast.promise(mutateAsync("Active"), {
                error: "Erro ao aceitar a proposta",
                loading: "A aceitar proposta",
                success:
                  "Proposta aceita com sucesso. Boa sorte para o serviço!",
              })
            }
            className="bg-accent-600 text-white rounded px-4 py-2"
          >
            Aceitar
          </button>
          <button
            disabled={isLoading}
            onClick={() =>
              toast.promise(mutateAsync("Cancelled"), {
                error: "Erro ao rejeitar a proposta",
                loading: "A rejeitar proposta",
                success:
                  "Proposta rejeitada com sucesso. O cliente será avisado.",
              })
            }
            className="bg-danger text-white rounded px-4 py-2"
          >
            Rejeitar
          </button>
        </div>
      )}
    </div>
  );
}
