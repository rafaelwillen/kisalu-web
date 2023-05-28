import classNames from "classnames";
import { HamburgerMenuProps } from "./types";

export default function HamburgerMenuButton({
  darkBackground = false,
  isChecked = false,
  toggle,
  className,
}: HamburgerMenuProps) {
  return (
    <label
      className={classNames(
        "hamburger-menu lg:hidden flex flex-col gap-[var(--bar-gap)] w-max absolute z-20 cursor-pointer right-6",
        darkBackground
          ? "after:bg-white before:bg-white"
          : "after:bg-text-200 before:bg-text-200",
        className
      )}
    >
      <input
        checked={isChecked}
        onChange={toggle}
        type="checkbox"
        className={classNames(
          "hamburger-menu border-white focus:shadow-none focus:ring-0",
          darkBackground ? "bg-white" : "bg-text-200"
        )}
      />
    </label>
  );
}
