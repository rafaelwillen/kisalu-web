import { ClipLoader } from "react-spinners";
import { LoadingStatusProps } from "./types";

const LoadingStatus = ({ message = "Carregando..." }: LoadingStatusProps) => (
  <div className="py-16 mt-8 text-center">
    <ClipLoader size={40} color="#114c50" />
    <p>{message}</p>
  </div>
);

export default LoadingStatus;
