import { useState } from 'react';
import "./App.scss";

const colors = ['crimson', 'green', "purple", "teal", "yellow"]

function App() {
  const [activeClass, setActiveClass] = useState(colors[0]);

  const handleClick = (clName) => {
    setActiveClass(clName)
  }

  return (
    <div className='App' style={{ backgroundColor: activeClass }}>
      <h1>{activeClass}</h1>
      <div className="App__box">
        {
          colors.map((elem) => {
            return (
              <button
                key={elem}
                style={{ backgroundColor: elem }}
                onClick={() => handleClick(elem)}
              >
                {elem}
              </button>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
