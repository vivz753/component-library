import clsx from "clsx";
import type { FC } from "react";
export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  className?: string;
}

const baseStyle =
  "rounded-md border border-transparent cursor-pointer transition-all ease-in-out outline-2 outline-transparent";
const primaryStyle =
  "active:outline-m2 active:text-m1 hover:bg-m2 hover:text-m3 hover:outline-m2 active:bg-m3 active:text-cream bg-m3 text-cream";
const secondaryStyle = "hover:outline-m2 active:outline-m3 bg-cream text-m3";
const smStyle = "px-[0.6em] py-[0.3em] text-sm";
const mdStyle = "px-[1.2em] py-[0.6em]";
const lgStyle = "px-[2.5em] py-[0.8em] text-xl";

export const Button: FC<React.PropsWithChildren<ButtonProps>> = ({
  primary,
  label,
  size = "medium",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        className,
        size === "large" ? lgStyle : size === "medium" ? mdStyle : smStyle,
        primary ? primaryStyle : secondaryStyle,
        baseStyle
      )}
      {...props}>
      {label}
    </button>
  );
};
