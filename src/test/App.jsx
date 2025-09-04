import { useEffect, useState } from 'react';


export default function App() {

  const [arr, setArr] = useState(() => {
    return JSON.parse(localStorage.getItem('arr') || '[]')
  });




  return (
    <div className='App'>
      <h1>arr:{JSON.stringify(arr, null, 1)}</h1>
      <ul>
        {arr.map((elem) => {
          return <li key={elem}>{elem.toUpperCase()}</li>
        })}
      </ul>

    </div>
  );
}
