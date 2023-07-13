"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecureInput from "@/components/forms/elements/SecureInput";

export default function PasswordChangeForm() {
  return (
    <section className="mt-14 bg-white p-4 rounded lg:p-8">
      <h2 className="text-lg  font-medium pb-2 lg:pb-5 border-b border-b-neutral-200">
        Mudar a Password
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 lg:mt-9">
        <div className="space-y-2">
          <SecureInput label="Password antiga" />
          <SecureInput label="Nova Password" />
          <SecureInput label="Confirmar Password" />
          <PrimaryButton fitContent>Alterar</PrimaryButton>
        </div>
      </form>
    </section>
  );
}
