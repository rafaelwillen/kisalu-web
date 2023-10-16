import { getActivityById } from "@/api/activity";
import { getProviderById } from "@/api/provider";
import Container from "@/components/common/Container";
import { Routes } from "@/utils/constants/routes";
import { getAuthenticationToken } from "@/utils/server";
import { ArrowDown } from "lucide-react";
import { notFound, redirect } from "next/navigation";
import ClientDetails from "../../service/[id]/hire/confirmation/_components/ClientDetails";
import ProviderDetails from "../../service/[id]/hire/confirmation/_components/ProviderDetails";
import Form from "./Form";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function ActivityPaymentPage({
  params: { id: activityParams },
}: PageProps) {
  const token = getAuthenticationToken();
  if (!token) redirect(Routes.home);
  const activity = await getActivityById(activityParams);
  if (!activity) notFound();
  const provider = await getProviderById(activity.provider.id);
  if (!provider) notFound();

  return (
    <Container small>
      <main className="grid grid-cols-2 my-8 gap-4">
        <h1 className="col-span-full text-center text-2xl">
          Pagamento do Serviço
        </h1>
        <div className="flex gap-2 justify-center flex-col">
          <ClientDetails />
          <ArrowDown size={50} className="self-center" />
          <ProviderDetails showBank provider={provider} />
        </div>
        <Form activity={activity} token={token} />
      </main>
    </Container>
  );
}
