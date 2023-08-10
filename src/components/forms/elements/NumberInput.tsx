import { forwardRef } from "react";
import { NumericFormat } from "react-number-format";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";
import { NumberInputProps } from "./types";

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      label,
      errorMessage,
      icon,
      name,
      value,
      thousandSeparator = " ",
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex-1 space-y-1">
        <Label htmlFor={name} label={label} required={props.required} />
        <div className="p-2 border border-neutral-200 rounded flex items-center focus-within:border-primary-400 duration-150 gap-2">
          {icon}
          <NumericFormat
            getInputRef={ref}
            thousandSeparator={thousandSeparator}
            decimalSeparator=","
            fixedDecimalScale
            decimalScale={2}
            name={name}
            id={name}
            value={value}
            className="flex-1 outline-none border-0 focus:ring-0 p-0"
            {...props}
          />
        </div>
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
    );
  }
);

export default NumberInput;
