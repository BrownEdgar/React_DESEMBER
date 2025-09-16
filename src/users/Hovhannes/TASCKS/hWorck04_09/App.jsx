import { useState } from "react"
import "./App.scss"
import DivSort from './DivSort';


export default function App() {
  const [letrArr, setLetrArr] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { noteText } = e.target;
    const text = noteText.value;

    if (!letrArr.includes(text)) {
      setLetrArr([...letrArr, text])
    } else alert("is oll ready have a this word")
  }

  const handleDelete = (elem) => {
    setLetrArr(letrArr.filter(key => key !== elem))
  }

  return <div className="App" >
    <form className="App__form" onSubmit={handleSubmit}>
      <label htmlFor="sumNote">Note Lists</label>
      <input type="text" id="noteText" name="noteText" />
      <input type="submit" value="Save" />
    </form>
    <div className="App__listNote">
      <ul>
        {letrArr.map((elem) => {
          return <div key={elem + "1"}>
            <li>{elem}</li>
            <button onClick={() => handleDelete(elem)}>
              delete
            </button>
          </div>
        })}
      </ul>
    </div>
    {letrArr.length > 0 && (
      <DivSort setLetrArr={setLetrArr} letrArr={letrArr} />
    )}
  </div>

}