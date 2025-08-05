import { useState, useEffect } from "react";
import './FetchData.css'

function FetchData() {
  const [data, setData] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => res.json())
      .then(data => setData(data))
  }

  useEffect(() => {
    getData()
    // ashxatum e mek angam komponenty mount anelis
  }, [])


  const handleDelete = (id) => {
    const result = data.filter((elem) => elem.id !== id);
    setData(result)
  }
  const handleSort = () => {
    if (isSorted) {
      setData(data.toReversed())
    } else {
      const sortedData = data.toSorted((a, b) => {
        return a.title.localeCompare(b.title)
      })
      setData(sortedData)
    }
    setIsSorted(true)
  }

  return (
    <div className='FetchData'>
      <h1>Fetch Data in React</h1>
      <button onClick={handleSort}>SORT</button>
      {
        data.map((elem) => {
          return <h2 key={elem.id}>
            {elem.title}
            <span onClick={() => handleDelete(elem.id)}>×</span>
          </h2>
        })
      }

    </div>
  )
}
export default FetchData