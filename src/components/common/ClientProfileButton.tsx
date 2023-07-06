"use client";

import * as Dialog from "@radix-ui/react-dialog";
import classNames from "classnames";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ClientProfile from "../dialog/ClientProfile";

type Props = {
  whiteBackground?: boolean;
  name: string;
  avatarImageURL: string;
};

function ClientProfileButton({ whiteBackground, avatarImageURL, name }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={(open) => setOpen(open)}>
      <Dialog.Trigger
        className={classNames(
          "flex items-center gap-4  group px-2 py-2 rounded-md duration-200",
          whiteBackground ? "hover:bg-primary-100" : "hover:bg-white"
        )}
      >
        <p
          className={classNames(
            "duration-200",
            whiteBackground ? "text-text-200" : "group-hover:text-text-200"
          )}
        >
          {name}
        </p>
        <Image
          src={avatarImageURL}
          alt=""
          width={36}
          height={36}
          className="w-9 h-9 rounded-full bg-white border border-white group-hover:border-neutral-400 duration-200"
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.DialogOverlay className="z-10 bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="z-20 data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-screen w-[90vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-10 shadow-xl focus:outline-none">
          <ClientProfile onClose={() => setOpen(false)} />
          <Dialog.Close asChild>
            <button className="absolute top-4 right-4" aria-label="Close">
              <XIcon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ClientProfileButton;
