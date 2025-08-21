import { useReducer } from "react"
import { intialState, reducer } from "./reducer"



    function App() {
        const [state, dispatch] = useReducer(reducer, intialState)
        return (
            <div className="App">
                <div className="App__buttons">
                    <h2>{JSON.stringify(state, null, 2)}</h2>
                   
                    <button onClick={() => dispatch({ type: "push" })} >push</button>
                    <button onClick={() => dispatch({ type: "uniq" })} >uniq</button>
                    <button onClick={() => dispatch({ type: "sort" })} >sort</button>
                    <button onClick={() => dispatch({ type: "delete" })} >delete</button>
                    <button onClick={() => dispatch({ type: "one",payload:{n:1} })} >one</button>

                </div>


            </div>
        )
    }

export default App