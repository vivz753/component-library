// import {Button} from "@components/Button"
import { Button } from "./components/Button";
import { Carousel } from "./components/Carousel";
import { LoadingOverlay } from "./components/LoadingOverlay";
import { Sparkles } from "./components/Sparkles";
import { SparkleIcon } from "./icons/SparkleIcon";
import clsx from "clsx";
import { Header } from "./components/Header";
import {Input} from "./components/Input"
import {useState} from "react"

function App() {
  const [search, setSearch] = useState("")
  return (
    <div className="w-screen min-h-screen bg-black">
      {/* <p className="text-m1 bg-cream">It works hehehe</p> */}
      <Header username="vivian" />
      click on this <a href="/">link</a>
      <Input placeholder="Search for a value" value={search} onChange={(e) => setSearch(e.target.value)} />
      <Button label="hi" />
      <div className="flex shrink-0 w-[100px] h-[100px] m-20 bg-red-200">
        <Sparkles>
          <div className="p-20">hi</div>
        </Sparkles>
      </div>
      <Button label="poop">
        <Sparkles>
          <div className="p-20">hi</div>
        </Sparkles>
      </Button>
      {/* <Carousel /> */}
      {/* <LoadingOverlay /> */}
    </div>
  );
}

export default App;
