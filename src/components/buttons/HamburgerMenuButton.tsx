import classNames from "classnames";

type Props = {
  darkBackground?: boolean;
  isChecked?: boolean;
  onChange?: (value: boolean) => void;
};

export default function HamburgerMenuButton({
  darkBackground = false,
  isChecked = false,
  onChange,
}: Props) {
  return (
    <label
      className={classNames(
        "hamburger-menu lg:hidden flex flex-col gap-[var(--bar-gap)] w-max absolute z-20 cursor-pointer right-6",
        darkBackground
          ? "after:bg-white before:bg-white"
          : "after:bg-text-200 before:bg-text-200"
      )}
    >
      <input
        checked={isChecked}
        onChange={(e) => onChange?.(e.target.checked)}
        type="checkbox"
        className={classNames(
          "hamburger-menu",
          darkBackground ? "bg-white" : "bg-text-200"
        )}
      />
    </label>
  );
}

// -translate-y-full -translate-x-full
