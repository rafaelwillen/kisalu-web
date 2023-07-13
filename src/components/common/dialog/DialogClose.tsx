"use client";

import { DialogClose as Close } from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

export default function DialogClose() {
  return (
    <Close asChild>
      <button className="absolute top-4 right-4" aria-label="Close">
        <XIcon />
      </button>
    </Close>
  );
}
