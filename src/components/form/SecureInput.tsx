import { Eye, EyeClosed } from "@phosphor-icons/react";
import { forwardRef, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";
import { SecureInputProps } from "./types";

const SecureInput = forwardRef<HTMLInputElement, SecureInputProps>(
  ({ label, errorMessage, name, ...props }, ref) => {
    const [showText, setShowText] = useState(false);
    return (
      <div className="flex-1 space-y-1">
        <Label htmlFor={name} label={label} required={props.required} />

        <div className="p-2 border border-neutral-200 rounded flex items-center focus-within:border-primary-400 duration-150 gap-2">
          <input
            {...props}
            ref={ref}
            type={showText ? "text" : "password"}
            name={name}
            id={name}
            className="flex-1 outline-none"
          />
          {showText ? (
            <EyeClosed
              size={20}
              className="text-text-200 select-none"
              onClick={() => setShowText(false)}
            />
          ) : (
            <Eye
              size={20}
              className="text-text-200 select-none"
              onClick={() => setShowText(true)}
            />
          )}
        </div>
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
    );
  }
);

export default SecureInput;
