import './App.scss';

function App() {
  return <div className='App'>
    <h1 className="App__title">
      Lorem, ipsum dolor.
    </h1>
    <p className='App__text App__text-xl'>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quibusdam officia labore nemo inventore, esse vel blanditiis minima eligendi reiciendis similique facere nulla magnam! Illo nulla ut eligendi unde expedita.
    </p>
    <p className='App__text App__text-sm'>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quibusdam officia labore nemo inventore, esse vel blanditiis minima eligendi reiciendis similique facere nulla magnam! Illo nulla ut eligendi unde expedita.
    </p>
    <p className='box'>
      <span>span 1</span>
      <span>span 2</span>
    </p>
    <button className='App__btn'>my button</button>
  </div>;
}

export default App;
