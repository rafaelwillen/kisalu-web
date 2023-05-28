import classNames from "classnames";
import { PropsWithChildren } from "react";

type Props = {
  small?: boolean;
  relative?: boolean;
};

export default function Container({
  children,
  relative = false,
  small = false,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={classNames(
        "px-5",
        small && "lg:mx-auto lg:container",
        relative && "relative"
      )}
    >
      {children}
    </div>
  );
}
