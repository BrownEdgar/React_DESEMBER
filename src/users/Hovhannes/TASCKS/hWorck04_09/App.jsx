import { useState } from "react"
import "./App.scss"


export default function App() {
  const [letrArr, setLetrArr] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // const {noteText} = e.target;
    const text = noteText.value;
    if(!letrArr.includes(text)){
      setLetrArr([...letrArr, text])
    }else alert("is oll ready have a this word")
  }
  const DivSort = () => {
    if(letrArr.length > 0){
          <button onClick={() => setLetrArr(letrArr.toSorted())}> sort </button>
    }
  }

  return <div className="App" onSubmit={handleSubmit}>
    <form className="App__form">
      <label htmlFor="sumNote">Note Lists</label>
      <input type="text" id="noteText" name="noteText" />
      <input type="submit" value="Save" />
    </form>
    <div className="App__listNote">
      <ul>
        {letrArr.map((elem) => {
          return <div key={elem + "1"}>
            <li key={elem}>{elem}</li>
            <button onClick={() => 
            setLetrArr(letrArr.filter(key => key !== elem)
            )}>
            delete</button>
          </div>
        })}
      </ul>
    </div>
    <button className="sortButton" onClick={() => setLetrArr(letrArr.toSorted())}> sort</button>
  </div>

}