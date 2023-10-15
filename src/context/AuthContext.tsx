"use client";

import {
  authenticateAdministratorNextServer,
  authenticateUserNextServer,
  authenticationQueryKeys,
  getAuthenticatedUser,
} from "@/api/authentication";
import {
  AdminAuthenticationResponseBody,
  UserAuthenticationResponseBody,
} from "@/api/types/response";
import { Routes } from "@/utils/constants/routes";
import { LoginFormType } from "@/utils/schemas/loginSchema";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

type ProviderProps = {
  token?: string;
};

type AuthContextData = {
  user: UserAuthenticationResponseBody | undefined;
  token?: string;
  isLoading: boolean;
  isAdmin: boolean;
  login: (args: LoginMutationArgs) => Promise<AdminAuthenticationResponseBody>;
  logout: (userType: "Administrator" | "User") => void;
};

type LoginMutationArgs = {
  data: LoginFormType;
  userType: "Administrator" | "User";
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({
  children,
  token: authToken,
}: PropsWithChildren<ProviderProps>) {
  const [token, setToken] = useState(authToken);
  const router = useRouter();
  const loginMutation = useMutation(
    ({ data, userType }: LoginMutationArgs) =>
      userType === "Administrator"
        ? authenticateAdministratorNextServer(data)
        : authenticateUserNextServer(data),
    {
      onSuccess: ({ token }) => setToken(token),
      onError: (error) => {
        if (error instanceof Error) toast.error(error.message);
      },
    }
  );
  const { data: user } = useQuery(
    authenticationQueryKeys.currentUser(token!),
    () => getAuthenticatedUser(token!),
    {
      enabled: !!token,
    }
  );
  const isAdmin = user?.role === "Administrator";

  function logout(userType: "Administrator" | "User") {
    userType === "Administrator"
      ? router.replace(Routes.logoutAdmin)
      : router.replace(Routes.logout);
    setToken(undefined);
  }

  const contextValue: AuthContextData = {
    user,
    token,
    isLoading: loginMutation.isLoading,
    login: loginMutation.mutateAsync,
    isAdmin,
    logout,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
