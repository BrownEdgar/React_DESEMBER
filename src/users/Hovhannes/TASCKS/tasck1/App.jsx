import { useState } from "react"
import "./App.scss"


export default function App(){
  const [data, setData] = useState(
    [
    {
      id: 1,
      title: 'Web Design',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus pariatur est quos.'
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus pariatur est quos.'
    },
    {
      id: 3,
      title: 'Web Solutions',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus pariatur est quos.'
    },
  ]
  )
  const hendelDelete = (id)=> {
    const resalt = data.filter((elem)=> {
      return elem.id !== id
    })
    setData(resalt)
  }

  return <div className="App">
    {data.map((elem) => {
      return (
        <div className="App__block" key={elem.id}>
        <h2>{elem.title}</h2>
        <p>{elem.description}</p>
        <button onClick={() => hendelDelete(elem.id)}>Delete</button>
    </div>
      )
    })}
    

  </div>

}