"use client";

import { Routes } from "@/utils/constants/routes";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import DangerButton from "./DangerButton";
import { LogoutButtonProps } from "./types";

export default function LogoutButton({ type }: LogoutButtonProps) {
  const router = useRouter();
  const route = type === "admin" ? Routes.logoutAdmin : Routes.logout;
  return (
    <DangerButton variant="text" onClick={() => router.replace(route)}>
      <LogOutIcon /> Finalizar sessão
    </DangerButton>
  );
}
