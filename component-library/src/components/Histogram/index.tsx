import * as d3 from "d3";
import { useMemo } from "react";

type HistogramProps = {
  width?: number;
  height?: number;
  data?: number[];
};

// const domain = [0, 20];
const domain = [0, 10];
// const exampleData = [0, 1, 1, 3, 4, 6, 7, 8, 2, 3, 6, 8, 9, 10, 11, 18, 13, 15, 16, 19, 20];
const exampleData = [1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 6, 6, 9];
// const thresholds = [0, 5, 10, 15, 20]
const thresholds = [0, 2, 4, 6, 8, 10];
export const Histogram = ({
  width = 700,
  height = 400,
  data = exampleData,
}: HistogramProps) => {
  //read the data

  // build the scales
  const xScale = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain(domain)
        .range([10, width - 10]),
    [data, width]
  );

  //build the buckets from data
  const bins = useMemo(() => {
    const binBuilder = d3
      .bin()
      .value((d) => d)
      .domain(domain)
      .thresholds(thresholds);

    return binBuilder(data);
  }, [xScale]);

  const yScale = useMemo(() => {
    const max = Math.max(...bins.map((b) => b?.length));

    return d3.scaleLinear().range([height, 0]).domain([0, max]);
  }, [data, height]);

  //build the rectangels
  const rects = bins.map((b, i) => {
    console.log("bin", b, b.length);

    return b.x0 !== undefined && b.x1 !== undefined ? (
      <rect
        key={i}
        fill="var(--color-m1)"
        stroke="var(--color-m3)"
        x={xScale(b.x0)}
        width={xScale(b.x1) - xScale(b.x0)}
        y={yScale(b.length)}
        height={height - yScale(b.length)}
      />
    ) : null;
  });

  return (
    <svg className="" width={width} height={height}>
      {rects}
    </svg>
  );
};
