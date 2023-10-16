"use client";

import { changeActivityState } from "@/api/activity";
import executePayment from "@/api/payment";
import { BaseActivityType } from "@/api/types";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import FileInput from "@/components/forms/elements/FileInput";
import { Routes } from "@/utils/constants/routes";
import { formatToCurrency } from "@/utils/intl";
import { PaymentFormType, paymentSchema } from "@/utils/schemas/paymentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AlertTriangleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

type Props = {
  activity: BaseActivityType;
  token: string;
};

export default function Form({ activity, token }: Props) {
  const [isValid, setIsValid] = useState(false);

  const router = useRouter();
  const { control, handleSubmit, watch } = useForm<PaymentFormType>({
    resolver: zodResolver(paymentSchema),
  });
  useEffect(() => {
    setIsValid(false);
  }, [watch("invoice")]);

  const invoiceCheck = useMutation((file: File) => executePayment(file));
  const makeAsDone = useMutation(
    () => changeActivityState(activity.id, "Finished", token),
    {
      onSuccess: () => {
        toast.success("Pagamento efectuado com sucesso");
        router.push(Routes.home);
      },
      onError: () => {
        toast.error("Ocorreu um erro ao efectuar o pagamento");
      },
    }
  );

  async function formSubmit({ invoice }: PaymentFormType) {
    await toast.promise(invoiceCheck.mutateAsync(invoice), {
      error: "O comprovativo não é válido",
      loading: "Validando comprovativo",
      success: "Comprovativo Valido! Pode efectuar o pagamento",
    });
    setIsValid(true);
  }

  return (
    <form
      onSubmit={handleSubmit(formSubmit, console.error)}
      className="flex gap-5 flex-col"
    >
      <p className="text-center">
        De momento o pagamento é feito via <strong>Multicaixa Express</strong>
      </p>
      <p className="text-center">
        Faça o pagamento na aplicação com o IBAN abaixo e submeta o comprovativo
      </p>
      <p className="text-center font-bold text-xl">
        AO06.0040.0000.3075.6142.1016.0
      </p>
      <p className="bg-primary-300 rounded-md p-4">
        <AlertTriangleIcon className="stroke-danger inline" /> AVISO: Tenha a
        certeza que o IBAN está correcto, o montante da transferência e que o
        nome do beneficiário: <strong className="text-xl">KISALU</strong> esteja
        correcto.
      </p>
      <p className="text-center text-xl">Valor a pagar</p>
      <p className="text-center text-2xl">
        {formatToCurrency(activity.agreedValue)}
      </p>
      <Controller
        control={control}
        name="invoice"
        render={({ field, fieldState: { error } }) => (
          <FileInput
            {...field}
            errorMessage={error?.message}
            label="Submeter comprovativo"
          />
        )}
      />
      {isValid ? (
        <PrimaryButton
          onClick={() => makeAsDone.mutate()}
          isLoading={makeAsDone.isLoading}
          type="button"
        >
          Efectuar Pagamento
        </PrimaryButton>
      ) : (
        <PrimaryButton
          type="submit"
          variant="outline"
          isLoading={invoiceCheck.isLoading}
        >
          Verificar o comprovativo
        </PrimaryButton>
      )}
    </form>
  );
}
