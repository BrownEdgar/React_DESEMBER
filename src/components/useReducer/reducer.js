
// action = {} + type

// 10. 
// 9. 
// 8. 
// 7. 
// 6. 
// 5. 
// 4. 
// 3. 
// 2. 
// 1. addItem (push) 


export const initialState = [];
export const reducer = (state, action) => {
  // state = [], action = {type: "push"}
  switch (action.type) {
    case 'push': return addItem(state)
    case 'uniq': return uniq(state)
    case 'sort': return sortArray(state)
    case 'delete': return deleteItem(state, action.payload.index)
    case 'save': return saveItem(state, action.payload.n)
    default: return state
  }
}

const saveItem = (state, n) => {

}


const addItem = (state) => {
  const random = Math.round(Math.random() * 150)
  return [...state, random]
}

const uniq = (state) => {
  const result = Array.from(new Set(state))
  return result
}

const sortArray = (state) => {
  const result = state.toSorted((a, b) => a - b)
  return result
}

const deleteItem = (state, index) => {
  return state.toSpliced(index, 1)
}