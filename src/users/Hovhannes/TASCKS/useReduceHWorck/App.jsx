import { useEffect, useReducer, useState } from "react"
import { initialState, reducer } from "./reducer";
import "./App.scss"


export default function App() {

  const [counter, setCounter] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState);
  const dicrimentCounter = () => setCounter(counter + 1);


  useEffect(() => {
    dicrimentCounter()
  }, [state]);


  return <div className="App">
    <div className="buttons">
      <h2>{counter}</h2>
      <h2>{JSON.stringify(state, null, 2)}</h2>
      <button onClick={() => {
        dispatch({ type: "sortDel" });

      }}>sort & del</button>
      <button onClick={() => dispatch({ type: "addNewNum", payload: { number: 5 } },)}>Add New Num</button>
      <button onClick={() => dispatch({ type: "deletMin" })}>delet Min</button>
      <button onClick={() => dispatch({ type: "power" })}>power</button>
    </div>

  </div>;

}