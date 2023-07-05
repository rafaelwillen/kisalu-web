import { forwardRef } from "react";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";
import { DatePickerInputProps } from "./types";

const DatePicker = forwardRef<HTMLInputElement, DatePickerInputProps>(
  (
    { name, label, onDateChange, errorMessage, selectedDate, ...props },
    ref
  ) => {
    return (
      <div className="flex-1 space-y-1">
        <Label htmlFor={name} label={label} required={props.required} />
        <div className="p-px border border-neutral-200 rounded focus-within:border-primary-400 duration-150">
          <input
            {...props}
            ref={ref}
            type="date"
            name={name}
            id={name}
            className="border-0 w-full focus:ring-0"
            value={selectedDate?.toISOString().split("T")[0]}
            onChange={(e) =>
              onDateChange && onDateChange(new Date(e.target.value))
            }
          />
        </div>
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
    );
  }
);

export default DatePicker;
