import classNames from "classnames";
import { forwardRef } from "react";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";
import { SelectProps } from "./types";

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      errorMessage,
      icon,
      placeholder,
      options,
      name,
      inlineLabel = false,
      onValueSelect,
      selectedValue,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={classNames(
          "space-y-1",
          inlineLabel ? "flex gap-4 space-y-0 items-center" : "flex-1"
        )}
      >
        <Label htmlFor={name} label={label} required={props.required} />
        <div className="p-px  border border-neutral-200 rounded flex items-center focus-within:border-primary-400 duration-150 gap-2">
          {icon}
          <select
            {...props}
            ref={ref}
            name={name}
            id={name}
            className="border-0 w-full focus:ring-0"
            value={selectedValue}
            onChange={(e) => {
              onValueSelect?.(e.target.value);
            }}
          >
            <option value="" hidden>
              Selecione um valor
            </option>
            {options.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
    );
  }
);

export default Select;
