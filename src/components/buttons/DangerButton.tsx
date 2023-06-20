import classNames from "classnames";
import { PropsWithChildren, forwardRef } from "react";
import { ClipLoader } from "react-spinners";
import { DangerButtonProps } from "./types";

const DangerButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<DangerButtonProps>
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
        "py-2 flex gap-2 justify-center rounded duration-300 ease-in-out disabled:opacity-30 items-center",
        variant === "solid" &&
          "bg-danger/80 text-white shadow-md hover:bg-danger active:bg-danger/40",
        variant === "outline" &&
          "border border-danger text-danger hover:bg-danger/80 hover:text-white",
        variant === "text" &&
          "text-danger/80 hover:bg-danger/80 font-bold hover:text-white",
        fitContent ? "w-fit px-4" : "w-full"
      )}
    >
      {isLoading ? <ClipLoader color="white" size={25} /> : children}
    </button>
  )
);

export default DangerButton;
