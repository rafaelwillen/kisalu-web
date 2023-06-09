// TODO: Add props

import { CalendarCheck, Navigation } from "lucide-react";

export default function LocationAndDurationInfo() {
  return (
    <section className="flex justify-between max-w-lg mx-auto">
      <div className="flex items-center gap-4">
        <CalendarCheck size={30} className="text-accent-800" />
        <div className="flex flex-col">
          <p className="font-bold">Tempo de entrega</p>
          <p>1-3 dias</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Navigation size={30} className="text-accent-800" />
        <div className="flex flex-col">
          <p className="font-bold">Localização</p>
          <p>Luanda</p>
        </div>
      </div>
    </section>
  );
}
