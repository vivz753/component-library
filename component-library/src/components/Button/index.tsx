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
  "rounded-md border border-transparent cursor-pointer transition-all ease-in-out  focus:outline-2";
const primaryStyle = "hover:border-m2 bg-m3 text-cream";
const secondaryStyle = "hover:border-m2 bg-cream text-m3";
const smStyle = "px-[0.6em] py-[0.3em] text-sm";
const mdStyle = "px-[1.2em] py-[0.6em]";
const lgStyle = "px-[2.5em] py-[0.8em] text-xl";

export const Button: FC<React.PropsWithChildren<ButtonProps>> = ({
  primary,
  label,
  size = "medium",
  className,
  children,
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
      {children}
    </button>
  );
};
