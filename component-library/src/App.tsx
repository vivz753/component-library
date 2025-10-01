// import {Button} from "@components/Button"
import { Button } from "./components/Button";
import { Carousel } from "./components/Carousel";
import { LoadingOverlay } from "./components/LoadingOverlay";
import { Sparkles } from "./components/Sparkles";
import { SparkleIcon } from "./icons/SparkleIcon";
import clsx from "clsx";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { useState, useRef, useEffect } from "react";
import { TransitionDemo } from "./components/Histogram/TransitionDemo";
import { useDimensions } from "./hooks/useDimensions";
import { d1, d2, d3 } from "./components/Histogram/sampleData";

// const exampleData = [1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 6, 6, 9]

function App() {
  const ref = useRef<HTMLDivElement>(null);

  // console.log("useDimensions", useDimensions())
  const dimensions = useDimensions(ref);
  console.log("dimensions", dimensions);

  const [search, setSearch] = useState("");
  return (
    <div className="w-screen min-h-screen bg-white">
      {/* <p className="text-m1 bg-cream">It works hehehe</p> */}
      <Header username="vivian" />
      <TransitionDemo
        width={700}
        height={400}
        dataset={[d1, d2, d3]}
        domain={[0, 50]}
      />
      {/* <Histogram data={exampleData} /> */}

      {/* <Wrapper ref={ref}> */}

      {/* </Wrapper> */}

      <Input
        placeholder="Search for a value"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button label="hi" />
      {/* <Carousel /> */}
      {/* <LoadingOverlay /> */}
    </div>
  );
}

export default App;

const Wrapper = ({ children, ref }) => {
  // const ref = useRef<HTMLDivElement>(null)
  // console.log("wrapper ref", ref)
  //   useEffect(() => {
  //   console.log("dimensions", useDimensions(ref))
  // }, [ref])

  // console.log('wrapper dimensions', dimensions)
  return <div className="w-full h-[300px] bg-blue-200">heoifj Wrapper!</div>;
};
