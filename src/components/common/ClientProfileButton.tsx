"use client";

import * as Dialog from "@radix-ui/react-dialog";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import ClientProfile from "../dialog/ClientProfile";
import DialogClose from "./dialog/DialogClose";
import DialogContainer from "./dialog/DialogContainer";
import DialogOverlay from "./dialog/DialogOverlay";

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
        <DialogOverlay />
        <DialogContainer>
          <ClientProfile onClose={() => setOpen(false)} />
          <DialogClose />
        </DialogContainer>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ClientProfileButton;
