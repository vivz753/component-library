import { HeartIcon } from "../../icons/HeartIcon";

interface LoadingOverlayProps {
  label?: string;
  heart?: boolean;
}

export const LoadingOverlay = ({
  label = "loading",
  heart = true,
}: LoadingOverlayProps) => (
  <div className="pointer-events-none fixed inset-0 z-20 flex h-screen w-screen cursor-wait items-center justify-center">
    <div className="absolute inset-0 bg-cream opacity-20" />
    <div className="flex flex-row items-center justify-center gap-2 rounded-xl bg-m3 px-5 py-3">
      {heart && <HeartIcon className="h-6 w-6 animate-pulse fill-cream" />}
      <span className="flex select-none flex-row items-center gap-1 font-title text-xl text-cream">
        {label}
        <div className="text- flex flex-row  gap-0.5">
          <span className="blink " style={{ animationDelay: "0ms" }}>
            .
          </span>
          <span className="blink" style={{ animationDelay: "333ms" }}>
            .
          </span>
          <span className="blink" style={{ animationDelay: "666ms" }}>
            .
          </span>
        </div>
      </span>
    </div>
  </div>
);
