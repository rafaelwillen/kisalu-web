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

export interface NumberInputProps
  extends Omit<InputProps, "type" | "value" | "defaultValue"> {
  value?: number;
  defaultValue?: number;
  allowLeadingZeros?: boolean;
  thousandSeparator?: boolean | string;
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
  inlineLabel?: boolean;
  onValueSelect?: (value: string) => void;
  selectedValue?: string;
}

export interface ImageInputProps extends CustomInputProps {
  label: string;
  errorMessage?: string;
  selectedImage?: File;
  onImageSelect?: (image: File) => void;
  width?: number;
  height?: number;
}

export interface DatePickerInputProps extends CustomInputProps {
  onDateChange?: (date: Date) => void;
  label: string;
  errorMessage?: string;
  selectedDate?: Date;
}