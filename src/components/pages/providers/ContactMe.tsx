import PrimaryButton from "@/components/buttons/PrimaryButton";
import {
  ArrowUpRight,
  Calendar,
  CalendarCheck,
  GenderMale,
  MapPin,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function ContactMe() {
  return (
    <section className="p-8 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center pb-2 border-b border-neutral-300 mb-3 ">
        <p className="flex gap-2 items-center">
          <MapPin size={25} className="text-accent-400" /> Localização
        </p>
        <p className="font-medium">Rangel, Luanda</p>
      </div>
      <div className="flex justify-between items-center pb-2 border-b border-neutral-300 mb-3 ">
        <p className="flex gap-2 items-center">
          <Calendar size={25} className="text-accent-400" /> Membro desde
        </p>
        <p className="font-medium">
          {new Date().toLocaleDateString("pt-AO", {
            year: "numeric",
            month: "long",
          })}
        </p>
      </div>
      <div className="flex justify-between items-center pb-2 border-b border-neutral-300 mb-3 ">
        <p className="flex gap-2 items-center">
          <CalendarCheck size={25} className="text-accent-400" /> Última Entrega
        </p>
        <p className="font-medium">5 dias</p>
      </div>
      <div className="flex justify-between items-center pb-2 border-b border-neutral-300 mb-3 ">
        <p className="flex gap-2 items-center">
          <GenderMale size={25} className="text-accent-400" /> Género
        </p>
        <p className="font-medium">Masculino</p>
      </div>
      <Link href="#" legacyBehavior>
        <PrimaryButton>
          Contactar-me <ArrowUpRight />
        </PrimaryButton>
      </Link>
    </section>
  );
}
