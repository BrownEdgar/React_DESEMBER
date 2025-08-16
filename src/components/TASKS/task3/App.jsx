import { useState } from 'react';
import "./App.scss";

const buttonsName = [
  { id: 1, name: "one" },
  { id: 2, name: "two" },
  { id: 3, name: "three" },
  { id: 4, name: "four" },
]

function App() {
  const [x, setX] = useState('one');
  const [count, setCount] = useState(0);


  const handleClick = (name) => {
    if (name === x) return;
    setX(name);
    setCount(count + 1)
    // ❌ count =
    // ❌ setCount =
  }

  return (
    <div className="App">
      <h1>{x}</h1>
      {
        buttonsName.map((elem) => {
          return (
            <button
              className={`${elem.name === x ? "active" : ""}`}
              key={elem.id}
              onClick={() => handleClick(elem.name)}
            >
              {elem.name}
            </button>
          )
        })
      }
      <h1>count:{count}</h1>
    </div>
  )

}

export default App;
