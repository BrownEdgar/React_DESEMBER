import { useState } from 'react';
import jsonData from './data.json'
import './App.scss'
function App() {
  const [data, setData] = useState(jsonData);
  const [sortField, setsortField] = useState('');


  const handleSort = (property) => {
    let result;
    switch (property) {
      case 'title':
        result = data.toSorted((a, b) => a.title.localeCompare(b.title))

        break;
      case 'price':
        result = data.toSorted((a, b) => a.price - b.price)
        break;
      default:
        result = data
    }
    setData(result)
    setsortField(property)
  }
  const handleDelete = (id) => {
    const result = data.filter((elem) => elem.id !== id);
    setData(result)
  }


  const total = () => {
    const sum = data.reduce((acc, next) => {
      return acc + next.price
    }, 0)

    return `${sum} $`
  }

  return (
    <div className='App'>
      <table className='App__Table'>
        <thead>
          <tr>
            <th>id</th>
            <th>image</th>
            <th>title
              <span
                className={`App__icon ${sortField === 'title' ? 'App__icon-reverse' : ''}`}
                onClick={() => handleSort("title")}>
                &uArr;
              </span>
            </th>
            <th>description</th>
            <th>
              price
              <span
                className={`App__icon ${sortField === 'price' ? 'App__icon-reverse' : ''}`}
                onClick={() => handleSort("price")}>
                &uArr;
              </span>
            </th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>
                  <img src={elem.image} alt={elem.title} />
                </td>
                <td className='App__TitleTd'>{elem.title}</td>
                <td>{elem.description}</td>
                <td>{elem.price}</td>
                <td>
                  <button onClick={() => handleDelete(elem.id)}>❌</button>
                </td>
              </tr>
            )
          })}
          {
            data.length === 0 ? (
              <tr>
                <td colSpan={6}> NO CONTENT !🫠 </td>
              </tr>
            ) : null
          }
        </tbody>

        {
          data.length > 0 ? (
            <tfoot>
              <tr>
                <td colSpan={4}>total</td>
                <td colSpan={2}>
                  {total()}
                </td>
              </tr>
            </tfoot>
          ) : null
        }

      </table>

    </div>
  );
}

export default App;
