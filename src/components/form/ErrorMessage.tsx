import { ErrorMessageProps } from "./types";

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <span className="text-sm text-danger">{message}</span>;
}
