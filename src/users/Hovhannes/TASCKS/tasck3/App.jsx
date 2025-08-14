import { useState } from "react"
import "./App.scss"




export default function App(){

  
const [arr, setArr] = useState([{id: 1, name: "Zgo", age: 22},
  {id: 2, name: "Hayq", age: 32},
  {id: 3, name: "Sona", age: 20}])
const hClick = () => {
  setArr(arr.toSorted((a, b) => a.name.localeCompare(b.name)))
}

return <div className="App">

      <table>
        <thead>
              <tr>
                <th>id</th>
                <th>name <span onClick={hClick}> 000 </span></th>
                <th>age</th>
              </tr>
            </thead>
        <tbody>
            {arr.map(elem => {

              return <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td>{elem.age}</td>
              </tr>
            })}
          
        </tbody>
      </table>

  </div>

}