import PrimaryButton from "@/components/buttons/PrimaryButton";
import { formatToCurrency } from "@/utils/intl";

export default function ServicePrice() {
  return (
    <section className="border border-neutral-200 rounded-lg shadow-lg p-8 mt-7 max-w-xl mx-auto xl:w-1/2">
      <h2 className="font-medium text-center">Preço Mínimo do Serviço</h2>
      <p className="font-bold text-2xl text-center my-5">
        {formatToCurrency(300_000_000)}
      </p>
      <PrimaryButton>Contratar</PrimaryButton>
    </section>
  );
}
