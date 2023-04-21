import { forwardRef } from "react";
import { InputProps } from "./types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, icon, name, type, ...props }, ref) => {
    return (
      <div className="flex-1 space-y-1">
        <label htmlFor={name} className="text-sm font-medium leading-7">
          {label} {props.required && "*"}
        </label>
        <div className="p-2 border border-neutral-200 rounded flex items-center focus-within:border-primary-400 duration-150 gap-2">
          {icon}
          <input
            {...props}
            ref={ref}
            type={type}
            name={name}
            id={name}
            className="flex-1 outline-none"
          />
        </div>
        {errorMessage && (
          <span className="text-sm text-danger">{errorMessage}</span>
        )}
      </div>
    );
  }
);

export default Input;
