import { formatToCompactNumber } from "@/utils/intl";
import { Clock, Radio, Target } from "lucide-react";

export default function QuickInfo() {
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
            <Radio size={40} className="text-accent-700" />
            <div className="absolute w-4/5 h-4/5 rounded-full -z-10 -bottom-2 -right-2 bg-accent-200/40" />
          </div>
          <p className="font-medium">Total de Serviços</p>
          <p>{formatToCompactNumber(921)}</p>
        </li>
        <li className="flex flex-col items-center">
          <div className="relative mb-3">
            <Clock size={40} className="text-accent-700" />
            <div className="absolute w-4/5 h-4/5 rounded-full -z-10 -bottom-2 -right-2 bg-accent-200/40" />
          </div>
          <p className="font-medium">Pedidos em Espera</p>
          <p>{formatToCompactNumber(5)}</p>
        </li>
      </ul>
    </section>
  );
}
