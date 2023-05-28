"use client";

import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
