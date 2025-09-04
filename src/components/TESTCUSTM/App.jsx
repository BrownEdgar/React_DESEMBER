import useCount from './useCount'
import './App.scss'

function App() {
  const [count, { minus, plus, addRandom, incrase }] = useCount(2)


  return (
    <div className='App'>
      <p className='App__count' >{count}</p>
      <button className='App__btn App__btn-minus App__btn-red' onClick={minus}>Minus</button>
      <button className='App__btn App__btn-plus' onClick={plus}>Plus</button>
      <button className='App__btn App__btn-addnum' onClick={addRandom}>Add num</button>
      <button className='App__btn App__btn-incrase' onClick={incrase}>Increase</button>
    </div>
  )
}

export default App 