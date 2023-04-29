import { useCompactNumberFormatter } from "@/hooks/intl";
import { Broadcast, Queue, Target } from "@phosphor-icons/react";

export default function QuickInfo() {
  const formatToCompact = useCompactNumberFormatter();
  return (
    <section>
      <ul className="flex flex-wrap justify-center items-center gap-4 xl:gap-16">
        <li className="flex flex-col items-center">
          <div className="relative mb-3">
            <Target size={40} className="text-accent-700" />
            <div className="absolute w-4/5 h-4/5 rounded-full -z-10 -bottom-2 -right-2 bg-accent-200/40" />
          </div>
          <p className="font-medium">Taxa de Sucesso</p>
          <p>98%</p>
        </li>
        <li className="flex flex-col items-center">
          <div className="relative mb-3">
            <Broadcast size={40} className="text-accent-700" />
            <div className="absolute w-4/5 h-4/5 rounded-full -z-10 -bottom-2 -right-2 bg-accent-200/40" />
          </div>
          <p className="font-medium">Total de Serviços</p>
          <p>{formatToCompact(921)}</p>
        </li>
        <li className="flex flex-col items-center">
          <div className="relative mb-3">
            <Queue size={40} className="text-accent-700" />
            <div className="absolute w-4/5 h-4/5 rounded-full -z-10 -bottom-2 -right-2 bg-accent-200/40" />
          </div>
          <p className="font-medium">Pedidos em Espera</p>
          <p>{formatToCompact(5)}</p>
        </li>
      </ul>
    </section>
  );
}
