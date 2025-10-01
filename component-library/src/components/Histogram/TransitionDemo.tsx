import { useState } from "react";
import { Histogram } from "../Histogram";
import { Button } from "../Button";

const BUTTONS_HEIGHT = 50;

type HistogramDatasetTransitionProps = {
  width: number;
  height: number;
  dataset: number[][];
  domain?: [number, number];
};

export const TransitionDemo = ({
  width = 700,
  height = 400,
  domain = [0, 100],
  dataset,
}: HistogramDatasetTransitionProps) => {
  if (!dataset || dataset?.length < 1) return null;
  const [selectedData, setSelectedData] = useState(dataset[0]);

  return (
    <div className="m-8">
      <div className="flex-row gap-2 flex">
        {dataset.map((d, i) => (
          <Button
            size="small"
            label={`Data ${i + 1}`}
            onClick={() => setSelectedData(dataset[i])}
          />
        ))}
      </div>
      <Histogram
        domain={domain}
        width={width}
        height={height - BUTTONS_HEIGHT}
        data={selectedData}
      />
    </div>
  );
};
