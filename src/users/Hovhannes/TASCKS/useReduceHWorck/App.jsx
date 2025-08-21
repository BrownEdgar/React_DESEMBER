import { useReducer, useState} from "react"
import { initialState, reducer } from "./reducer";
import "./App.scss"


export default function App() {

  const [counter, setCounter] = useState(0)

  const [state, dispatch] = useReducer(reducer, initialState);

  const dicrimentCounter = () => setCounter(counter + 1)
  

  return <div className="App">
    <div className="buttons">
      <h2>{counter}</h2>
      <h2>{JSON.stringify(state, null, 2)}</h2>
      <button onClick={() => dispatch({type: "sortDel"}, dicrimentCounter())}>sort & del</button>
      <button onClick={() =>  dispatch({type: "addNewNum", payload: {number: 5}}, dicrimentCounter())}>Add New Num</button>
      <button onClick={() => dispatch({type: "deletMin"}, dicrimentCounter())}>delet Min</button>
      <button onClick={() => dispatch({type: "power"}, dicrimentCounter())}>power</button>
    </div>
    
  </div>;

}