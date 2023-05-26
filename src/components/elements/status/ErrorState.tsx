import { XCircle } from "@phosphor-icons/react";
import { ErrorStateProps } from "../types";

const ErrorStateComponent = ({ message }: ErrorStateProps) => (
  <div className="py-16 mt-8 text-center space-y-4">
    <XCircle size={48} color="#e00000" className="mx-auto" weight="fill" />
    <p>Ocorreu um erro. {message}</p>
  </div>
);

export default ErrorStateComponent;
