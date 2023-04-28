import { forwardRef } from "react";
import ErrorMessage from "./ErrorMessage";
import { CheckboxProps } from "./types";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      name,
      checked,
      onChange,
      errorMessage,
      required,
      defaultChecked,
      onBlur,
    },
    ref
  ) => (
    <div>
      <div className="flex items-start gap-3 justify-between">
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          onChange={(e) => onChange && onChange(e.target.checked)}
          onBlur={onBlur}
          ref={ref}
          defaultChecked={defaultChecked}
          className="mt-[3px]"
        />
        <label htmlFor={name} className="text-sm font-medium">
          {label} {required && "*"}
        </label>
      </div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  )
);

export default Checkbox;
