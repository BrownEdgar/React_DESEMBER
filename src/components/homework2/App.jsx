import "./App.scss"
import { useEffect, useReducer } from "react"
import {  initialState, reducer,SAVE_ITEMS, SET_LOADING } from "./reducer"
import List from "./List"


function App() {
  const [state, dispatch] = useReducer(reducer,  initialState)

  useEffect(() => {
    
    const fetchData = async ()=>{
      // ste verevum grum enq  dispatchy vor mijev tvyalnery qashely loadingy darna true qasheluc heto kdarna noric false
      dispatch({type:SET_LOADING,payload:true})
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
       const data = await response.json()
         // dispatch grum enq vor stxic datan xrgenq reduser.js:(dispatch stanuma ira mech object vori anunn e action):
        //  payloadi meji datan gnuma initialState i mechi zangvaci mech state-i:staten hma payload datana:
         dispatch({type:SAVE_ITEMS,payload:data})
      
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      {/* paymanakan render vory mijev tvyalnery ej hasnely cuyc kta LOADING  */}
      {state.loading ?<h1>LOADIN...</h1>: <List data = {state.data}/> }
     
    </div>
  )
}

export default App
