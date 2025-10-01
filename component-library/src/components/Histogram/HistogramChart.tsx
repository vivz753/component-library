import * as d3 from "d3";
import { useMemo, useEffect, useRef } from "react";
// import { useDimensions } from "../../hooks/useDimensions";
import { Bar } from "./Bar";

const MARGIN = { top: 30, right: 30, bottom: 40, left: 50 };

type HistogramChartProps = {
  width: number;
  height: number;
  data: number[];
  ref?: React.RefObject<HTMLDivElement>;
  domain: [number, number];
  totalBins: number;
  binPadding: number;
};

const exampleData = [
  0, 1, 1, 3, 4, 6, 7, 8, 2, 3, 6, 8, 9, 10, 11, 18, 13, 15, 16, 19, 20,
];
export const HistogramChart = ({
  width,
  height,
  data,
  domain,
  totalBins,
  binPadding,
  ref,
}: HistogramChartProps) => {
  const axesRef = useRef(null);

  // TODO: add responsive width/height
  // const dimensions = useDimensions(ref);
  // console.log("ref", ref);
  // useEffect(() => {

  //   const dimensions = useDimensions(ref)
  //   console.log('dimensions in histo', dimensions)
  // }, [ref])
  // console.log("dimensions in Histo", dimensions);
  // const {width, height} = dimensions
  
  const boundWidth = width - MARGIN.right - MARGIN.left;
  const boundHeight = height - MARGIN.top - MARGIN.bottom;
  //read the data

  // build the scales
  const xScale = useMemo(() => {
    return d3.scaleLinear().domain(domain).range([10, boundWidth]);
  }, [data, width, domain]);

  console.log("xScale:", xScale);

  //build the buckets from data
  const bins = useMemo(() => {
    const binBuilder = d3
      .bin()
      .value((d) => d)
      .domain(xScale?.domain()) // why use domain here instead of regular domain?
      .thresholds(xScale.ticks(totalBins)); // why use ticks here?

    return binBuilder(data);
  }, [xScale]);

  const yScale = useMemo(() => {
    const max = Math.max(...bins.map((b) => b?.length));

    return d3.scaleLinear().range([boundHeight, 0]).domain([0, max]).nice(); // what's nice() do?
  }, [data, height]);

  // Render the axes
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();

    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append("g")
      .attr("transform", "translate(0," + boundHeight + ")")
      .call(xAxisGenerator);

    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement.append("g").call(yAxisGenerator);
  }, [xScale, yScale, boundHeight]);

  // Construct the bars
  const bars = bins.map((b, i) => {
    // console.log("bin", b, b.length);

    return b.x0 !== undefined && b.x1 !== undefined ? (
      <Bar
        key={i}
        x={xScale(b.x0) + binPadding / 2}
        width={xScale(b.x1) - xScale(b.x0) - binPadding}
        y={yScale(b.length)}
        height={boundHeight - yScale(b.length)}
      />
    ) : null;
  });

  return (
    <svg className="" width={width} height={height}>
      <g
        width={boundWidth}
        height={boundHeight}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}>
        {bars}
      </g>
      <g
        width={boundWidth}
        height={boundHeight}
        ref={axesRef}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
      />
    </svg>
  );
};
