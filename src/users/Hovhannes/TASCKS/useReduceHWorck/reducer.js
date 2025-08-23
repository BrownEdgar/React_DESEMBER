
export const initialState = [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]

export const reducer = (state, action) => {
  switch (action.type) {
    case "sortDel": return sortDel(state)
    case "addNewNum": return addNewNum(state, action.payload.number)
    case "deletMin": return deletMin(state)
    case "power": return power(state)

    default: return state
  }
}

const sortDel = (state) => {
  const result = state.toSorted((a, b) => a - b).slice(0, -3);
  return result
}

const addNewNum = (state, number) => {
  if (!state.includes(number)) {
    return [...state, number]
  }
  return state
}

const deletMin = (state) => {
  const min = Math.min(...state)
  const result = state.filter((elem) => elem != min)
  return result
}

const power = (state) => {
  const result = state.map((elem) => elem ** 2);
  return result
}
