import Component from '@components/Component'
import './App.css'
import { useAppSelector, useAppDispatch } from '@/app/hooks'
import { incrementByAmount } from '@/features/counter/counterSlice'

function App() {
  const counterValue = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  return (

    <div>
      <h1>hello world {counterValue}</h1>
      <button onClick={() => { dispatch(incrementByAmount(4)) }}>
        Increment
      </button>
      <Component name="John" age={32} data={[{ id: 1, value: "a" }, { id: 2, value: "b" }]} />
    </div>

  )
}

export default App
