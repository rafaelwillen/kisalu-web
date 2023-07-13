"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import Input from "@/components/forms/elements/Input";
import Select from "@/components/forms/elements/Select";
import * as Dialog from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

export default function AddressUpdateFormDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="underline">Clique aqui para inserir.</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="z-10 bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="z-20 data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-screen w-[90vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-10 shadow-xl focus:outline-none">
          <Dialog.Close asChild>
            <>
              <section>
                <Dialog.Title className="text-lg  font-medium pb-2 lg:pb-5 border-b border-b-neutral-200">
                  Adicionar Endereço
                </Dialog.Title>
                <form className="grid grid-cols-1 md:grid-cols-2 mt-6 lg:mt-9 gap-4">
                  <Select label="Provincia" options={[]} />
                  <Select label="Munícipio" options={[]} />
                  <div className="col-span-full">
                    <Input label="Endereço" />
                  </div>
                  <div>
                    <PrimaryButton type="submit" fitContent>
                      Adicionar
                    </PrimaryButton>
                  </div>
                </form>
              </section>
              <button className="absolute top-4 right-4" aria-label="Close">
                <XIcon />
              </button>
            </>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
