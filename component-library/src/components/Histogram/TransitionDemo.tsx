import { useState } from "react";
import { d1, d2 } from "./sampleData";
import { Histogram } from "../Histogram";
import { Button } from "../Button";

const BUTTONS_HEIGHT = 50;

type HistogramDatasetTransitionProps = {
  width: number;
  height: number;
};

export const TransitionDemo = ({
  width,
  height,
}: HistogramDatasetTransitionProps) => {
  const [selectedData, setSelectedData] = useState(d1);

  return (
    <div className="m-8">
      <div className="flex-row gap-2 flex">
        <Button
          size="small"
          label="Data 1"
          onClick={() => setSelectedData(d1)}
        />
        <Button
          size="small"
          label="Data 2"
          onClick={() => setSelectedData(d2)}
        />
      </div>
      <Histogram
        width={width}
        height={height - BUTTONS_HEIGHT}
        data={selectedData}
      />
    </div>
  );
};
