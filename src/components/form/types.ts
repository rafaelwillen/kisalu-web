import { InputHTMLAttributes, ReactNode } from "react";

interface CustomInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "className"> {}

export interface InputProps extends CustomInputProps {
  label: string;
  errorMessage?: string;
  icon?: ReactNode;
  type?: "email" | "text" | "search" | "tel" | "url";
}

export interface SecureInputProps extends Omit<InputProps, "type" | "icon"> {}