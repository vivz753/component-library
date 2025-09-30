// import {Button} from "@components/Button"
import { Button } from "./components/Button";
import { Carousel } from "./components/Carousel";
import { LoadingOverlay } from "./components/LoadingOverlay";
import { SparkleAnim } from "./components/SparkleAnim";
import { SparkleIcon } from "./icons/SparkleIcon";
import clsx from "clsx";

function App() {
  return (
    <>
      <p className="text-m1 bg-cream">It works hehehe</p>
      click on this <a href="/">link</a>
      <Button label="hi" />
      <div className="flex shrink-0 w-[100px] h-[100px] m-20 bg-red-200">
        <SparkleAnim>
          <div className="p-20">hi</div>
        </SparkleAnim>
      </div>
      <Button label="poop">
        <SparkleAnim>
          <div className="p-20">hi</div>
        </SparkleAnim>
      </Button>
      {/* <Carousel /> */}
      {/* <LoadingOverlay /> */}
    </>
  );
}

export default App;
