export const initialState = []

export const reducer = (state, action) => {
  switch (action.type) {
    case "push": return addItem(state)
    case "uniq": return uniq(state)
    case "sort": return sortArray(state)
    case "delete": return deleteItem(state, action.payload.index)
    case "deleteIncN": return deleteIncNum(state, action.payload.number)

    default: return state
  }
}

const addItem = (state) => {
  return [...state, Math.round(Math.random() * 15)]
}

const uniq = (state) => {
  const result = Array.from(new Set(state));
  return result
}

const sortArray = (state) => {
   const result = state.toSorted((a, b) => a-b)
   return result
}

const deleteItem = (state, index) => {
  //  const copy = state.slice(0, -1)
    const copy = state.toSpliced(index, 1)
    return copy
}

const deleteIncNum = (state, number) => {
  const strArr = []
  state.map((elem) => {
    if(!(elem.toString().includes(number))){
      strArr.push(elem)
    }
  })  
  return strArr
}
