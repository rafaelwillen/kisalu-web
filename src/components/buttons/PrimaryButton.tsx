import classNames from "classnames";
import { PropsWithChildren, forwardRef } from "react";
import { ClipLoader } from "react-spinners";
import { PrimaryButtonProps } from "./types";

const PrimaryButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<PrimaryButtonProps>
>(
  (
    {
      variant = "solid",
      children,
      fitContent = false,
      isLoading = false,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      disabled={isLoading || props.disabled}
      {...props}
      className={classNames(
        "mt-5 py-2 flex gap-2 justify-center rounded duration-300 ease-in-out disabled:opacity-30 items-center",
        variant === "solid" &&
          "bg-primary-600 text-white shadow-md hover:bg-primary-400 active:bg-primary-300",
        variant === "outline" &&
          "border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white",
        variant === "text" &&
          "text-primary-600 hover:bg-primary-50 font-bold hover:text-primary-700",
        fitContent ? "w-fit px-4" : "w-full"
      )}
    >
      {isLoading ? <ClipLoader color="white" size={25} /> : children}
    </button>
  )
);

export default PrimaryButton;

