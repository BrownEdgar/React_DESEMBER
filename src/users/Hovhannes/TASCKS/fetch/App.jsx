import { useEffect, useReducer} from "react"
import { initialState, reducer, SAVE_ITEMS, SET_ERROR, SET_LOADING } from "./reducer";
import List from "./List"
import "./App.scss"


export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    const fetchData = async() => {
      dispatch({type: SET_LOADING, payload: true})
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await response.json()
      dispatch({type: SAVE_ITEMS, payload: data})
    } catch (error) {
      dispatch({type: SET_ERROR, payload: error})
    }  
      


     }
     fetchData()
  }, []);
  
  return <div className="App">
    {state.loading ? <h1>LOADING...</h1> : <List data={state.data} />} 
  </div>;

}