import { Arc } from "./Arc";

interface RainbowProps {
  size?: "small" | "large";
}
interface RainbowSize {
  r?: number;
  center?: number;
  height?: number;
  pathLength?: number;
  viewBox?: string;
}

const smallRainbow: RainbowSize = {
  r: 100,
  center: 150,
  viewBox: "25 40 250 100",
  pathLength: 314,
  height: 50,
};

const largeRainbow: RainbowSize = {
  r: 200,
  center: 300,
  viewBox: "50 80 500 200",
  pathLength: 628,
  height: 100,
};

// const colors = ['#FF1B8D', '#FFDA00', '#1BB3FF']

export const Rainbow: React.FC<RainbowProps> = ({ size = "small" }) => {
  // prefer if i can do this through ref on <path> in Arc
  //  const pathLength = document.querySelector('path')?.getTotalLength(); // is there a way to do this without querying the document?

  // should be fixed
  const lArcAngle = 270;
  const rArcAngle = 90;

  const { r, center, viewBox, pathLength, height } =
    size === "small" ? smallRainbow : largeRainbow;

  return (
    <div className="flex h-auto w-auto justify-center">
      <style>
        {`
          .animate {
            stroke-dasharray: ${pathLength};
            animation: strokeDash 2s infinite alternate ease;
          }
          
          @keyframes strokeDash {
            to {
                stroke-dashoffset: ${pathLength};
            }
          }
        `}
      </style>
      <div className="relative">
        <div className="">
          <Arc
            viewBox={viewBox}
            height={height}
            x={center}
            y={center}
            radius={r}
            startAngle={lArcAngle}
            endAngle={rArcAngle}
            css={{ stroke: `#FF1B8D` }}
            className="animate"
          />
        </div>
        <div className="absolute bottom-0">
          <Arc
            viewBox={viewBox}
            height={height}
            x={center}
            y={center}
            radius={r - 20}
            startAngle={lArcAngle}
            endAngle={rArcAngle}
            css={{ stroke: `#FFDA00` }}
            className="animate"
          />
        </div>
        <div className="absolute bottom-0">
          <Arc
            viewBox={viewBox}
            height={height}
            x={center}
            y={center}
            radius={r - 40}
            startAngle={lArcAngle}
            endAngle={rArcAngle}
            css={{ stroke: `#1BB3FF` }}
            className="animate"
          />
        </div>
      </div>
    </div>
  );
};
