import React, { useState } from 'react'

const arr = ["red","blue","black"]

function App() {
 const [text,setText]=useState("")
console.log(text);

  return (

    <div className='App'>
    <h1>{text}</h1>
    {
          
        arr.map((elem)=>{
            return <button  onClick={()=>setText(elem)} key={elem}>{elem}</button>
        })
    }
 
    </div>
  )
}

export default App