import {
  changeServiceState as changeServiceStateAPI,
  deleteService as deleteServiceAPI,
} from "@/api/services";
import { useAuth } from "@/context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type ActionName = "edit" | "delete" | "changeState";

export default function useServiceActionsMutation(serviceId: string) {
  const { token } = useAuth();
  const router = useRouter();
  const { mutateAsync } = useMutation(
    (action: ActionName) => {
      switch (action) {
        case "delete":
          return deleteServiceAPI(serviceId, token);
        case "changeState":
          return changeServiceStateAPI(serviceId, token);
        default:
          throw new Error("Invalid action");
      }
    },
    { onSuccess: () => router.refresh() }
  );

  const editService = () =>
    toast.promise(mutateAsync("edit"), {
      loading: "A editar serviço...",
      success: "Serviço editado com sucesso",
      error: "Ocorreu um erro ao editar o serviço",
    });
  const changeServiceState = () =>
    toast.promise(mutateAsync("changeState"), {
      loading: "A mudar o estado do serviço...",
      success: "Estado alterado com sucesso",
      error: "Ocorreu um erro ao alterar o estado",
    });
  function deleteService() {
    return toast.promise(mutateAsync("delete"), {
      loading: "A eliminar serviço...",
      success: "Serviço eliminado com sucesso",
      error: "Ocorreu um erro ao eliminar o serviço",
    });
  }
  return {
    editService,
    changeServiceState,
    deleteService,
  };
}
