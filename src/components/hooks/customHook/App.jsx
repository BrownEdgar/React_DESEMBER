
import useCount from './useCount';



function App() {
  const [count, { minus, plus, addRandom }] = useCount(13)

  return (
    <div className='App'>
      <h1>count:{count}</h1>
      <button onClick={minus}>-</button>
      <button onClick={addRandom}>add random</button>
      <button onClick={plus}>+</button>
    </div>
  );
}

export default App;
