// import {Button} from "@components/Button"
import { Button } from "./components/Button";
import { Carousel } from "./components/Carousel";
import { LoadingOverlay } from "./components/LoadingOverlay";
import {Header} from "./components/Header"

function App() {
  return (
    <div className="w-screen h-screen min-h-screen bg-black">
      {/* <p className="text-m1 bg-cream">It works hehehe</p> */}
      <Header />
      click on this <a href="/">link</a>
      <Button label="hi" />
      {/* <Carousel /> */}
      {/* <LoadingOverlay /> */}
    </div>
  );
}

export default App;
