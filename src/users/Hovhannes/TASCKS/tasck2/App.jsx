import { useState } from "react"
import "./App.scss"


const btnConut = ["one", "two", "three", "four"]
export default function App(){
  const [data, setData] = useState(btnConut)
  const [count, setCount] = useState(0)
  const [curentName, setcurentName] = useState("one")
  const hendelClick = (clName)=> {
    setCount(count+1);
    setcurentName(clName)
  }

  return <div className="App">
    <div className="App__block" >
    <h2>{count}</h2>
    {data.map((elem) => {
      return (
        <button onClick={() => hendelClick(elem)}key={elem}>{elem}</button>
      )
    })}
    
    <h2>{curentName}</h2>
     </div>

  </div>

}