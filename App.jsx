
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './src/features/counter/counterSlice'

export default function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <div>
        <h1>Count {count}</h1>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}