import { LabelProps } from "./types";

export default function Label({
  label,
  htmlFor,
  required = false,
}: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium leading-7">
      {label} {required && "*"}
    </label>
  );
}
