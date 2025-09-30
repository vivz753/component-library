// import {Button} from "@components/Button"
import { Button } from "./components/Button";
import { Carousel } from "./components/Carousel";
import { LoadingOverlay } from "./components/LoadingOverlay";

function App() {
  return (
    <>
      <p className="text-m1 bg-cream">It works hehehe</p>
      click on this <a href="/">link</a>
      <Button label="hi" />
      <Carousel />
      <LoadingOverlay />
    </>
  );
}

export default App;
