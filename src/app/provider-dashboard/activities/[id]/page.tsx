import { getActivityById } from "@/api/activity";
import { Routes } from "@/utils/constants/routes";
import { formatToCurrency } from "@/utils/intl";
import { getAuthenticationToken } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import ActivityActions from "../../_components/ActivityActions";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function SingleActivityPage({ params }: PageProps) {
  const { id: activityId } = params;
  const token = getAuthenticationToken();
  if (!token) redirect(Routes.login);
  const activity = await getActivityById(activityId);
  if (!activity) notFound();

  return (
    <main className="bg-white rounded px-7 py-5">
      <Link
        href={Routes.singleService(activity.service.id)}
        className="text-xl text-center mb-6 underline text-primary-400 block"
      >
        {activity.service.title}
      </Link>
      <div className="grid grid-cols-2 gap-4 items-start">
        <Image
          src={activity.service.bannerImageURL}
          className="rounded justify-self-center"
          width={400}
          height={200}
          alt={activity.service.title}
        />
        <div className="grid grid-cols-2 gap-4">
          <h2 className="col-span-full text-center">Comprador</h2>
          <Image
            className="border border-neutral-100 rounded-full justify-self-center"
            src={activity.client.avatarImageURL}
            alt="lll"
            width={90}
            height={90}
          />
          <div className="border border-neutral-100 rounded p-2">
            <p className="font-bold">Nome</p>
            <p>
              {activity.client.firstName} {activity.client.lastName}
            </p>
          </div>
        </div>
        <div className="grid col-span-full grid-cols-3 gap-4">
          <h2 className="col-span-full text-center">Detalhes da Proposta</h2>
          <div className="border border-neutral-100 rounded p-2">
            <p className="font-bold">Data de Inicio Prevista</p>
            <p>
              {new Date(activity.startDate).toLocaleDateString("pt-AO", {
                day: "numeric",
                year: "numeric",
                month: "long",
              })}
            </p>
          </div>
          <div className="border border-neutral-100 rounded p-2">
            <p className="font-bold">Data Submetida</p>
            <p>
              {new Date(activity.createdAt).toLocaleDateString("pt-AO", {
                day: "numeric",
                year: "numeric",
                month: "long",
              })}
            </p>
          </div>
          <div className="border bg-accent-600 text-white rounded p-2 ">
            <p className="font-bold">Cliente irá pagar</p>
            <p>{formatToCurrency(activity.agreedValue)}</p>
          </div>
          <div className="border border-neutral-100 rounded p-2 ">
            <p className="font-bold">O preço mínimo do seu serviço é</p>
            <p>{formatToCurrency(activity.service.minimumPrice)}</p>
          </div>
          <div className="border border-neutral-100 rounded p-2 col-span-2">
            <p className="font-bold text-center">
              Detalhes do Serviço do Cliente
            </p>
            <p>{activity.activityDetails}</p>
          </div>
          <ActivityActions
            token={token}
            activityId={activity.id}
            activityState={activity.state}
          />
        </div>
      </div>
    </main>
  );
}
