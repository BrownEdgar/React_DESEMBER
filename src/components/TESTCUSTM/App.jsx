import React from 'react'
import useCount from './useCount'

function App () {
    const [count,{minus,plus,addRandom}]=useCount(1)
    console.log(count);
    
  return (
    <div className='App'>
      <h1>count:{count}</h1>
  <button onClick={minus}>MINUS</button>
  <button onClick={plus}>PLUS</button>
  <button onClick={addRandom}>ADDNUM</button>
    </div>
  )
}

export default App 