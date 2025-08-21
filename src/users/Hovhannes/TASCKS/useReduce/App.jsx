import { useReducer} from "react"
import { initialState, reducer } from "./reducer";
import "./App.scss"


export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  

  return <div className="App">
    <div className="buttons">
      <h2>{JSON.stringify(state, null, 2)}</h2>
      <button onClick={() => dispatch({type: "push"})}>Push</button>
      <button onClick={() => dispatch({type: "uniq"})}>uniq</button>
      <button onClick={() => dispatch({type: "sort"})}>sort</button>
      <button onClick={() => dispatch({type: "delete", payload: {index: 2}})}>delete</button>
      <button onClick={() => dispatch({type: "deleteIncN", payload: {number: 1}})}>delete Num</button>

    </div>
    
  </div>;

}