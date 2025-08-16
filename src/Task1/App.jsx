import "./App.scss";
import { useState } from 'react'


function App() {
  const [arr, setArr] = useState([
    { id: 1, FirstName: "Mark", LastName: "Otto", email: "markotto@mail.com" },
    { id: 2, FirstName: "Jacop", LastName: "Thorton", email: "jacopthorton@mail.com" },
    { id: 3, FirstName: "Larry", LastName: "The Bird", email: "larrybird@mail.com" },
    { id: 4, FirstName: "John", LastName: "Doe", email: "jondohe@mail.com" }
  ])
  const handleDelete = (id) => {
    const result = arr.filter((elem) => {
      return elem.id !== id
    })
    setArr(result)
  }

  return (
    <div className='App'>
      <table className='App__table'>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Adress</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            arr.map((elem) => {
              return <tr key={elem.id}>
                <td>{elem.id} </td>
                <td>{elem.FirstName}</td>
                <td>{elem.LastName} </td>
                <td>{elem.email}</td>
                <td>
                  <button onClick={() => handleDelete(elem.id)}>delete</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>

  )
}

export default App

