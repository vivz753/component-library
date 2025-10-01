import clsx from "clsx";
import type { ChangeEventHandler, FC } from "react";

export const Input: FC<{
  className?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
}> = ({ className, value, onChange, placeholder }) => {
  return (
    <input
      onChange={onChange}
      value={value}
      className={clsx(
        className,
        "h-10 rounded-md bg-m3 p-3 text-cream placeholder:text-m1 focus:outline-cream outline-transparent outline-2"
      )}
      placeholder={placeholder}
    />
  );
};
