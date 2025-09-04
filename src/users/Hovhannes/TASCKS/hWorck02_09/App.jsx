import { useState } from "react"
import "./App.scss"


const abc = ["A", "B", "C", "D", "E"]
export default function App() {
  const [letrArr, setLetrArr] = useState("...");

  return <div className="App">
    <div className="App__letDiv">
      {abc.map(elem => {
        return <div
          className={letrArr === elem ? "App__letDiv__activ" : "App__letDiv__upLeter"}
          key={elem}
          onClick={() => { setLetrArr(elem) }}
        >
          {elem}
        </div>
      })}
    </div>
    <div className="App__let">{letrArr}</div>
  </div>

}