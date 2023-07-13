import { getAllServicesFromProvider } from "@/api/services";
import { Routes } from "@/utils/constants/routes";
import { ArrowUpRightIcon } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import PageHeader from "../_components/PageHeader";
import DesktopServicesList from "./_components/DesktopServicesList";
import MobileServicesList from "./_components/MobileServicesList";

export default async function ProviderServicesPage() {
  const token = cookies().get("token")?.value;
  if (!token) {
    throw new Error("No token found");
  }
  const services = await getAllServicesFromProvider(token);
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <PageHeader pageTitle="Gerir Serviços" pageDescription="" />
        <Link
          href={Routes.providerServiceCreation}
          className="bg-black py-2 md:py-4 px-8 md:px-4 flex text-white items-center justify-center rounded-md gap-2 hover:bg-neutral-700 transition-colors"
        >
          Adicionar Serviço <ArrowUpRightIcon />
        </Link>
      </div>
      <section className="bg-white p-4 rounded lg:p-8 mt-12">
        <MobileServicesList services={services} />
        <DesktopServicesList services={services} />
      </section>
    </>
  );
}
