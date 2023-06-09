"use client";

import {
  authenticationQueryKeys,
  getAuthenticatedUser,
} from "@/api/authentication";
import { UserAuthenticationResponseBody } from "@/api/types/response";
import { useQuery } from "@tanstack/react-query";
import { PropsWithChildren, createContext, useContext } from "react";

type ProviderProps = {
  token?: string;
};

type AuthContextData = {
  user: UserAuthenticationResponseBody | undefined;
  token?: string;
  isLoading: boolean;
  isAdmin: boolean;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({
  children,
  token,
}: PropsWithChildren<ProviderProps>) {
  const { data: user, isLoading } = useQuery(
    authenticationQueryKeys.currentUser,
    () => getAuthenticatedUser(token!),
    {
      refetchOnWindowFocus: false,
    }
  );
  const isAdmin = user?.role === "Administrator";

  const contextValue: AuthContextData = {
    user,
    token,
    isLoading,
    isAdmin,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
