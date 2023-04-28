import { forwardRef } from "react";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";
import { TextAreaInputProps } from "./types";

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaInputProps>(
  ({ label, errorMessage, icon, name, ...props }, ref) => (
    <div className="flex-1 space-y-1">
      <Label htmlFor={name} label={label} required={props.required} />
      <div className="p-2 border border-neutral-200 rounded flex items-center focus-within:border-primary-400 duration-150 gap-2">
        {icon}
        <textarea
          {...props}
          ref={ref}
          name={name}
          id={name}
          className="flex-1 outline-none resize-y max-h-44"
        />
      </div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  )
);

export default TextArea;
