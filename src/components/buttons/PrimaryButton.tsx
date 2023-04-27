import classNames from "classnames";
import { PropsWithChildren } from "react";
import { PrimaryButtonProps } from "./types";

export default function PrimaryButton({
  variant = "solid",
  children,
  fitContent = false,
  ...props
}: PropsWithChildren<PrimaryButtonProps>) {
  return (
    <button
      {...props}
      className={classNames(
        "mt-5 py-2 flex gap-2 justify-center rounded duration-300 ease-in-out disabled:opacity-30 items-center",
        variant === "solid" &&
          "bg-primary-600 text-white hover:bg-primary-400 active:bg-primary-300",
        variant === "outline" &&
          "border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white",
        variant === "text" &&
          "text-primary-600 hover:bg-primary-50 font-bold hover:text-primary-700",
        fitContent ? "w-fit px-4" : "w-full"
      )}
    >
      {children}
    </button>
  );
}
