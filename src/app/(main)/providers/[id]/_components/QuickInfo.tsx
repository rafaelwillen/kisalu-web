import { formatToCompactNumber } from "@/utils/intl";
import { Clock, Radio, Target } from "lucide-react";

type Props = {
  successRate: number;
  numberOfServices: number;
  finishedServices: number;
};

export default function QuickInfo({
  finishedServices,
  numberOfServices,
  successRate,
}: Props) {
  return (
    <section>
      <ul className="flex flex-wrap  justify-center items-center gap-4">
        <li className="flex flex-col items-center">
          <div className="relative mb-3">
            <Target size={40} className="text-accent-700" />
            <div className="absolute w-4/5 h-4/5 rounded-full -z-10 -bottom-2 -right-2 bg-accent-200/40" />
          </div>
          <p className="font-medium">Taxa de Sucesso</p>
          <p>{successRate}%</p>
        </li>
        <li className="flex flex-col items-center">
          <div className="relative mb-3">
            <Radio size={40} className="text-accent-700" />
            <div className="absolute w-4/5 h-4/5 rounded-full -z-10 -bottom-2 -right-2 bg-accent-200/40" />
          </div>
          <p className="font-medium">Total de Serviços</p>
          <p>{formatToCompactNumber(numberOfServices)}</p>
        </li>
        <li className="flex flex-col items-center">
          <div className="relative mb-3">
            <Clock size={40} className="text-accent-700" />
            <div className="absolute w-4/5 h-4/5 rounded-full -z-10 -bottom-2 -right-2 bg-accent-200/40" />
          </div>
          <p className="font-medium">Serviços Concluidos</p>
          <p>{formatToCompactNumber(finishedServices)}</p>
        </li>
      </ul>
    </section>
  );
}
