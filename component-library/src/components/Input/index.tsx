import clsx from "clsx";
import type { ChangeEventHandler, FC } from "react";

export const Input: FC<{
  className?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
  withCat?: boolean;
}> = ({ className, value, onChange, placeholder, withCat }) => {
  return (
    <div className="group relative justify-center border max-w-max rounded-md">
      {withCat && (
        <div
          className={clsx(
            "absolute left-[50%] top-0 z-0 h-10 w-10 translate-y-0 transform opacity-0 transition-all group-focus-within:z-[2] group-focus-within:-translate-y-[70%] group-focus-within:opacity-100 group-hover:z-[2] group-hover:-translate-y-[70%] group-hover:opacity-100 sm:left-20"
          )}>
          <img
            alt="typing cat"
            src="https://media4.giphy.com/media/UQ1EI1ML2ABQdbebup/200w.webp?cid=ecf05e474pw209zhbrob0zej2huygxqrkatwltps7d75n1bu&rid=200w.webp&ct=s"
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
      <input
        onChange={onChange}
        value={value}
        className={clsx(
          className,
          "h-10 rounded-md bg-m3 p-3 text-cream placeholder:text-m1  outline-2"
        )}
        placeholder={placeholder}
      />
    </div>
  );
};
