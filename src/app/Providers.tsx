"use client";

type Props = {
  token?: string;
};

import { AuthProvider } from "@/context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function Providers({
  children,
  token,
}: PropsWithChildren<Props>) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider token={token}>{children}</AuthProvider>
      <Toaster />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
