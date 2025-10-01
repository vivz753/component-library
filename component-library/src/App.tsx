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
import {Histogram} from "./components/Histogram"

const exampleData = [1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 6, 6, 9]

function App() {
  const [search, setSearch] = useState("")
  return (
    <div className="w-screen min-h-screen bg-white">
      {/* <p className="text-m1 bg-cream">It works hehehe</p> */}
      <Header username="vivian" />
          <Histogram width={400} height={400} data={exampleData} />

      <Input placeholder="Search for a value" value={search} onChange={(e) => setSearch(e.target.value)} />
      <Button label="hi" />
      {/* <Carousel /> */}
      {/* <LoadingOverlay /> */}
    </div>
  );
}

export default App;
