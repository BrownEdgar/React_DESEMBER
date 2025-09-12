import { useState } from "react"
import "./App.scss"




export default function App(){

const collor =  ["green", "red", "blue"]
const [arr, setArr] = useState("green")
const hChange = (e) => {
  setArr(e.target.value)
  console.log(e.target.value);
  
}

return <div className="App">
    <select onChange={hChange}>
      {collor.map(elem => {
         return <option value={elem} key={elem}>{elem}</option>
      })}
    </select>
    <div className="App__box" style={{backgroundColor: arr}}></div>
  </div>
}