import { forwardRef } from "react";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";
import { InputProps } from "./types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, icon, name, type, ...props }, ref) => {
    return (
      <div className="flex-1 space-y-1">
        <Label htmlFor={name} label={label} required={props.required} />
        <div className="p-2 border border-neutral-200 rounded flex items-center focus-within:border-primary-400 duration-150 gap-2">
          {icon}
          <input
            {...props}
            ref={ref}
            type={type}
            name={name}
            id={name}
            className="flex-1 outline-none border-0 focus:ring-0 p-0"
          />
        </div>
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
    );
  }
);

export default Input;
