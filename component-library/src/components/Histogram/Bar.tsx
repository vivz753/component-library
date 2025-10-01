import { useSpring, animated } from "@react-spring/web";

type BarProps = {
  width: number;
  height: number;
  x: number;
  y: number;
};

export const Bar = (props: BarProps) => {
  const { x, y, width, height } = props;

  const springProps = useSpring({
    to: { x, y, width, height },
    config: {
      friction: 30,
    },
    delay: x,
  });

  return (
    <animated.rect
      fill="var(--color-m1)"
      stroke="var(--color-m3)"
      x={springProps.x}
      width={springProps.width}
      y={springProps.y}
      height={springProps.height}
      opacity={0.7}
      fillOpacity={0.3}
      strokeWidth={1}
      rx={1}
    />
  );
};
