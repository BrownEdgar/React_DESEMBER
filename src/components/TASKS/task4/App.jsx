import { useState } from 'react';
import './App.css'

const cities = ['London', 'Paris', "Ney-York", "Moscow", 'Los-Angeles', "Singapure"]


function App() {
  const [currentElem, setCurrentElem] = useState('');

  return <div className='App'>
    <h1>{currentElem}</h1>
    <div className="App__buttons">
      {
        cities.map((elem) => {
          return <button
            className={`${currentElem === elem ? 'active' : ''}`}
            key={elem}
            onClick={() => setCurrentElem(elem)}
          >
            {elem}
          </button>
        })
      }
    </div>
  </div>;
}

export default App;
