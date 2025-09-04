import React from 'react'
import useCount from './useCount'
import './App.scss'

function App () {
    const [count,{minus,plus,addRandom,incrase}]=useCount(2)
   
    
  return (
    <div className='App'>
  <p  className='App__count' >{count}</p>
  <button className='App__minus' onClick={minus}>Minus</button>
  <button  className='App__plus' onClick={plus}>Plus</button>
  <button className='App__addnum' onClick={addRandom}>Add num</button>
  <button className='App__incrase' onClick={incrase}>Increase</button>
    </div>
  )
}

export default App 