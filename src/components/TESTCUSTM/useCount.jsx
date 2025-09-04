import { useState } from 'react'

function useCount(count) {
  const [value, setValue] = useState(count)
  const minus = () => setValue(value - 1)
  const plus = () => setValue(value + 1)
  const addRandom = () => setValue(value + Math.round(Math.random() * 100))
  const incrase = () => setValue(value * value)
  return [value, { minus, plus, addRandom, incrase }]
}

export default useCount