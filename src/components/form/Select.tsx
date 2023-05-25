import { forwardRef } from "react";
import Label from "./Label";
import { SelectProps } from "./types";

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, errorMessage, icon, placeholder, options, name, ...props },
    ref
  ) => {
    return (
      <div className="flex-1 space-y-1">
        <Label htmlFor={name} label={label} required={props.required} />
        <div className="p-px  border border-neutral-200 rounded flex items-center focus-within:border-primary-400 duration-150 gap-2">
          {icon}
          <select
            {...props}
            ref={ref}
            name={name}
            id={name}
            className="border-0 w-full focus:ring-0"
            defaultValue={options[0].value}
          >
            {options.map(({ label, value }, index) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
);

export default Select;
