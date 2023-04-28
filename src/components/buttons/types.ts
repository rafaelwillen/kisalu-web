import { ButtonHTMLAttributes } from "react";

export type HamburgerMenuProps = {
  darkBackground?: boolean;
  isChecked?: boolean;
  onChange?: (value: boolean) => void;
};

export interface PrimaryButtonProps
  extends Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "name" | "onClick" | "type" | "disabled"
  > {
  variant?: "solid" | "text" | "outline";
  fitContent?: boolean;
}
