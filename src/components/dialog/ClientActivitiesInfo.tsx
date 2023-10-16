import { getAllActivities } from "@/api/activity";
import { ActivityState } from "@/api/types";
import { Routes } from "@/utils/constants/routes";
import { formatToCurrency } from "@/utils/intl";
import { useQuery } from "@tanstack/react-query";
import { BadgeDollarSign } from "lucide-react";
import Link from "next/link";

function ClientActivitiesInfo() {
  const { isLoading, data, error } = useQuery(["activities"], getAllActivities);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return null;
  }

  function getStatus(state: ActivityState) {
    const status: Record<ActivityState, string> = {
      Active: "Em execução",
      Cancelled: "Cancelada",
      Finished: "Finalizada",
      OnDispute: "Em disputa",
      OnHold: "Em espera",
      OnRevision: "Em revisão",
    };
    return status[state];
  }

  return (
    <section>
      <h1 className="text-2xl text-center mb-4">Actividades</h1>
      <ul className="space-y-2">
        {data.map((activity) => (
          <li
            key={activity.id}
            className="grid grid-cols-5 gap-2 py-2 border-b border-neutral-200"
          >
            <h2 className="font-bold">{activity.service.title}</h2>
            <p>{formatToCurrency(activity.agreedValue)}</p>
            <p>{new Date(activity.startDate).toLocaleDateString("pt-AO")}</p>
            <p>{getStatus(activity.state)}</p>
            {activity.state === "Active" && (
              <Link
                title="Pagamento"
                href={Routes.activityPayment(activity.id)}
              >
                <BadgeDollarSign />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ClientActivitiesInfo;
