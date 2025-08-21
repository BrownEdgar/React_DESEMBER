import "./App.scss"
import { useEffect, useReducer } from "react"
import { initialState, reducer, SAVE_ITEMS, SET_ERROR, SET_LOADING } from "./reducer"
import List from './List';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      // sdskf fks kjdsh dskj 
      dispatch({ type: SET_LOADING, payload: true })
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos') // 1s
        const data = await response.json()
        dispatch({ type: SAVE_ITEMS, payload: data })
      } catch (error) {
        console.log(error);

        dispatch({ type: SET_ERROR, payload: error })
      }
    }
    fetchData()
  }, []);

  return (
    <div className='App'>
      {state.loading ? <h1>LOADING...</h1> : <List data={state.data} />}
    </div>
  )
}

export default App