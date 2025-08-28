import { useState } from 'react';
const names = [
  'Arman', "Ani", "Garik", "Taron", "Rima", "Satenik", "Sebastian", "Ashot", "Hovhannes", "Lilth", "Sos", "Mher", "Tigran"
]

function useArray({ quantity, min, max, type }) {
  const [value, setValue] = useState(() => {
    if (type === 'number') {
      return Array.from(
        { length: quantity },
        () => Math.round(Math.random() * (max - min) + min)
      )
    }
    if (type === 'string') {
      return Array.from(
        { length: quantity },
        () => {
          const index = Math.floor(Math.random() * names.length);
          return names[index]
        }
      )
    }
    throw new Error("invalid 'useArray' type")
  });

  const getMax = () => {
    return value.reduce((acc, next) => {
      return acc > next ? acc : next
    })
  }

  const sorted = () => {
    const result = value.toSorted((a, b) => a - b)
    setValue(result)
  }

  return type === 'number' ? [value, setValue, { getMax, sorted }] : [value, setValue]
}

export default useArray;
