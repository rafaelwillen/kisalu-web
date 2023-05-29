import { Star } from "lucide-react";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";
import { RatingProps } from "./types";

export default function RatingInput({
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
                strokeWidth={1}
                fill={index <= value ? "#E1C03F" : "none"}
              />
            </button>
          );
        })}
      </div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
}
