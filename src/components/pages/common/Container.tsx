import classnames from "classnames";
import { PropsWithChildren } from "react";

type Props = {
  small?: boolean;
  relative?: boolean;
};

export default function Container({
  children,
  small = false,
  relative = false,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={classnames("px-5", small ? "lg:mx-auto lg:container" : "", {
        relative: relative,
      })}
    >
      {children}
    </div>
  );
}
