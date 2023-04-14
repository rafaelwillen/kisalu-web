import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return <div className="px-5">{children}</div>;
}
