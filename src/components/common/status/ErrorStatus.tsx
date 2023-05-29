import { XCircle } from "lucide-react";
import { ErrorStatusProps } from "./types";

const ErrorStatus = ({ message }: ErrorStatusProps) => (
  <div className="py-16 mt-8 text-center space-y-4">
    <XCircle size={48} color="#e00000" className="mx-auto" />
    <p>Ocorreu um erro. {message}</p>
  </div>
);

export default ErrorStatus;
