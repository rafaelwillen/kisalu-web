import { Star } from "@phosphor-icons/react";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";
import { RatingProps } from "./types";

export default function Rating({
  label,
  onChange,
  value,
  errorMessage,
  name,
  required = false,
}: RatingProps) {
  return (
    <div className="flex-1 space-y-1">
      <Label htmlFor={name} label={label} required={required} />
      <div className="space-x-2">
        {[...Array(5)].map((_, index) => {
          index += 1;
          return (
            <button type="button" key={index} onClick={() => onChange(index)}>
              <Star
                size={20}
                weight={index <= value ? "fill" : "bold"}
                color="#E1C03F"
              />
            </button>
          );
        })}
      </div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
}
