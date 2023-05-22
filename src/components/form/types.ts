import {
  FocusEventHandler,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

export type SelectOption = {
  label: string;
  value: string;
};

interface CustomInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "className" | "id"
  > {}

interface CustomSelectProps
  extends Omit<InputHTMLAttributes<HTMLSelectElement>, "className" | "id"> {
  options: SelectOption[];
}

export interface InputProps extends CustomInputProps {
  label: string;
  errorMessage?: string;
  icon?: ReactNode;
  type?: "email" | "text" | "search" | "tel" | "url";
}

export interface SecureInputProps extends Omit<InputProps, "type" | "icon"> {}

export type RatingProps = {
  value: number;
  onChange: (value: number) => void;
  label: string;
  errorMessage?: string;
  name: string;
  required?: boolean;
};

export type ErrorMessageProps = {
  message: string;
};

export type LabelProps = {
  label: string;
  htmlFor?: string;
  required?: boolean;
};

export interface TextAreaInputProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> {
  label: string;
  errorMessage?: string;
  icon?: ReactNode;
}

export interface CheckboxProps {
  label: string;
  name?: string;
  value?: boolean;
  onChange?: (checked: boolean) => void;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  errorMessage?: string;
  required?: boolean;
  defaultChecked?: boolean;
}

export interface SelectProps extends CustomSelectProps {
  label: string;
  errorMessage?: string;
  icon?: ReactNode;
  placeholder?: string;
}

export interface ImageInputProps extends CustomInputProps {
  label: string;
  errorMessage?: string;
  selectedImage?: File;
  onImageSelect?: (image: File) => void;
}