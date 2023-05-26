import { EmptyStateProps } from "../types";

const EmptyStateComponent = ({ heading, message }: EmptyStateProps) => (
  <div className="py-16 mt-8 text-center space-y-4">
    <p className="text-2xl font-bold">{heading}</p>
    {message && <p className="text-lg">{message}</p>}
  </div>
);

export default EmptyStateComponent;
