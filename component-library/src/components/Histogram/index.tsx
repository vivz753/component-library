import { useState } from "react";
import { HistogramChart } from "./HistogramChart";
import { Button } from "../Button";

const BUTTONS_HEIGHT = 50;

type HistogramProps = {
  width: number;
  height: number;
  dataset: number[][];
  domain?: [number, number];
  totalBins?: number;
  binPadding?: number;
};

export const Histogram = ({
  width = 700,
  height = 400,
  domain = [0, 100],
  totalBins = 70,
  binPadding = 1,
  dataset,
}: HistogramProps) => {
  if (!dataset || dataset?.length < 1) return null;
  const [selectedData, setSelectedData] = useState(dataset[0]);

  return (
    <div className="m-8">
      <div className="flex-row gap-2 flex">
        {dataset.length > 1 &&
          dataset.map((d, i) => (
            <Button
              size="small"
              label={`Data ${i + 1}`}
              onClick={() => setSelectedData(dataset[i])}
            />
          ))}
      </div>
      <HistogramChart
        domain={domain}
        width={width}
        height={height - BUTTONS_HEIGHT}
        data={selectedData}
        totalBins={totalBins}
        binPadding={binPadding}
      />
    </div>
  );
};
