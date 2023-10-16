import { getAllUserActivities } from "@/api/activity";
import { getAuthenticatedUser } from "@/api/authentication";
import { ActivityState } from "@/api/types";
import { Routes } from "@/utils/constants/routes";
import { formatToCurrency } from "@/utils/intl";
import { getAuthenticationToken } from "@/utils/server";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {
  filter: ActivityState;
  title: string;
};

export default async function RecentServices({ filter, title }: Props) {
  const token = getAuthenticationToken();
  if (!token) redirect(Routes.login);
  const user = await getAuthenticatedUser(token);
  const activities = (await getAllUserActivities(user.id)).filter(
    (activity) => activity.state === filter
  );

  return (
    <div className="bg-white rounded px-7 py-5">
      <div className="flex justify-between flex-col sm:flex-row pb-4 border-b border-neutral-300 mb-8">
        <h2 className="font-medium text-lg">{title}</h2>
        <Link className="text-primary-500 underline max-sm:self-end" href="#">
          Ver todos
        </Link>
      </div>
      <ul className="space-y-5">
        {activities.map((activity) => (
          <li key={activity.id} className="border-b pb-5 border-neutral-300">
            <Link
              className="space-y-2"
              href={Routes.singleActivity(activity.id)}
            >
              <p>
                <strong className="font-medium">
                  {activity.client.firstName + " " + activity.client.lastName}
                </strong>{" "}
                <span className="text-accent-500">deseja</span> contratar o seu
                serviço{" "}
                <strong className="font-medium">
                  {activity.service.title}
                </strong>
              </p>
              <div className="flex justify-between text-sm">
                <p className="text-text-100">
                  {new Date(activity.startDate).toLocaleDateString("pt-AO", {
                    day: "numeric",
                    year: "numeric",
                    month: "long",
                  })}
                </p>
                <p className="text-text-200 font-medium">
                  {formatToCurrency(activity.agreedValue)}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
