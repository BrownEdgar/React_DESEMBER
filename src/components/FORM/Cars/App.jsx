import { useState } from 'react';
import "./App.scss";

function App() {
  const [cars] = useState([
    {
      id: 1,
      model: "Audi",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequatur adipisci, sunt libero incidunt est eius impedit ut mollitia sapiente earum possimus enim quia dolore, suscipit aspernatur, voluptas vel iusto quis? Ut soluta, labore quasi nulla ex dolorum facilis ipsa repellat tempore distinctio",
      image: "./images/audi.jpg",
      year: 2023,
      color: 'grey',
      inStoke: true,
    },
    {
      id: 2,
      model: "Mercedes",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequatur adipisci, sunt libero incidunt est eius impedit ut mollitia sapiente earum possimus enim quia dolore, suscipit aspernatur, voluptas vel iusto quis? Ut soluta, labore quasi nulla ex dolorum facilis ipsa repellat tempore distinctio",
      image: "./images/mers.jpg",
      year: 2023,
      color: 'black',
      inStoke: true,
    },
    {
      id: 3,
      model: "Bmw",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequatur adipisci, sunt libero incidunt est eius impedit ut mollitia sapiente earum possimus enim quia dolore, suscipit aspernatur, voluptas vel iusto quis? Ut soluta, labore quasi nulla ex dolorum facilis ipsa repellat tempore distinctio",
      image: "./images/bmw.jpg",
      year: 2024,
      color: 'white',
      inStoke: true,
    },
    {
      id: 4,
      model: "Ford",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequatur adipisci, sunt libero incidunt est eius impedit ut mollitia sapiente earum possimus enim quia dolore, suscipit aspernatur, voluptas vel iusto quis? Ut soluta, labore quasi nulla ex dolorum facilis ipsa repellat tempore distinctio",
      image: "./images/ford.jpg",
      year: 2022,
      color: 'metalic grey',
      inStoke: true
    },
  ]);

  const [currentCar] = useState(2);
  const car = cars.find((elem) => elem.id === currentCar)



  return (
    <div className='App'>
      <div className="App__header">

        {
          cars.map((elem) => {
            return <button
              disabled={!elem.inStoke}
              key={elem.model}>{elem.model}</button>
          })
        }

      </div>
      <div className="App__car">
        {
          car ? (
            <>
              <img src={car.image} alt={car.model} />
              <div className="App__info">
                <h1>{car.model}</h1>
                <p>{car.desc}</p>
                <ul>
                  <li><i className="pi pi-palette" ></i> {car.color}</li>
                  <li><i className='pi pi-box pi-spin'></i> {car.year}</li>
                  <li><i className='pi pi-hashtag'></i> {car.id}</li>
                </ul>
              </div>
            </>
          ) : <h1>Sorry Car not found</h1>
        }
      </div>
    </div>
  );
}

export default App;
