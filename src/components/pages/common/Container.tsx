import classnames from "classnames";
import { PropsWithChildren } from "react";

type Props = {
  small?: boolean;
};

export default function Container({
  children,
  small = false,
}: PropsWithChildren<Props>) {
  return (
    <div className={classnames("px-5", small ? "lg:mx-auto lg:container" : "")}>
      {children}
    </div>
  );
}
