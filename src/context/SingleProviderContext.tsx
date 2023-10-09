"use client";

import { BaseProviderType } from "@/api/types";
import { PropsWithChildren, createContext, useContext } from "react";

type ContextData = {
  provider: BaseProviderType;
};

type ProviderProps = Pick<ContextData, "provider">;

const Context = createContext<ContextData>({} as ContextData);

export function SingleProviderProvider({
  provider,
  children,
}: PropsWithChildren<ProviderProps>) {
  return <Context.Provider value={{ provider }}>{children}</Context.Provider>;
}

export function useSingleProvider() {
  const context = useContext(Context);
  if (!context) throw new Error("Context not defined");
  return context;
}
