import "./App.scss"
import { useReducer, useState } from "react"
import { intialState, reducer } from "./reducero"
function App() {
    const [state, dispatch] = useReducer(reducer, intialState)
    const [count,setCount] = useState(0)
    return (
        <div className='App'>
            <h2 className="App__h2">{JSON.stringify(state, null, 2)}</h2>
            <div className="App__buttons">
                <button className="App__button" onClick={() => dispatch({ type: "sort" })} >Sort & delete</button>
                <button className="App__button" onClick={() => dispatch({ type: "add",payload:{n:15,} })} >Add</button>
                <button className="App__button" onClick={() => dispatch({ type: "delete"})} >Delete</button>
                <button className="App__button" onClick={() => dispatch({ type: "square"})} >Square of elem</button>
            </div>

        </div>
    )
}

export default App