import { useState } from "react"
import "./App.scss"


export default function App() {

  const [arr, setArr] = useState([
    {
      id: 1,
      fName: "Mark",
      lName: "Otto",
      email: "markotto@email.com"
    },
    {
      id: 2,
      fName: "Jacob",
      lName: "Tharmont",
      email: "jacobtharmont@email.com"
    },
    {
      id: 3,
      fName: "Larry",
      lName: "the Bird",
      email: "larrybird@email.com"
    },
    {
      id: 4,
      fName: "John",
      lName: "Doe",
      email: "Johndoe@email.com"
    }
  ])

  return <div className="App">

    <table>
      <thead>
        <tr>
          <th className="head">#</th>
          <th className="head">First Name</th>
          <th>Last Name</th>
          <th>Email Address</th>
        </tr>
      </thead>
      <tbody>
        {arr.map(elem => {
          return <tr key={elem.id}>
            <td>{elem.id}</td>
            <td>{elem.fName}</td>
            <td>{elem.lName}</td>
            <td>{elem.email}</td>
          </tr>
        })}
      </tbody>
    </table>
  </div>

}