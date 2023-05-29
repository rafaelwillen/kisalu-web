import { forwardRef } from "react";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";
import { TextAreaInputProps } from "./types";

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaInputProps>(
  ({ label, errorMessage, icon, name, ...props }, ref) => (
    <div className="flex-1 space-y-1 flex flex-col">
      <Label htmlFor={name} label={label} required={props.required} />
      <textarea
        {...props}
        ref={ref}
        name={name}
        id={name}
        className="outline-none resize-y max-h-44 border active:outline-0 focus:outline-0 p-2  border-neutral-200 rounded flex items-center duration-150 gap-2"
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  )
);

export default TextArea;
