export const intialState = []
export const reducer = (state, action) => {
    switch (action.type) {
        case "push": return addItem(state)
        case "uniq": return uniq(state)
        case "sort": return sortArray(state)
        case "delete": return deleteArr(state)
        case "one": return oneArr(state, action.payload.n)
        
        default: return state

    }
}

const addItem =(state)=>{
    const random = Math.round(Math.random()*25)
    return [...state,random]
}

const uniq =(state)=>{
    const result = Array.from(new Set(state))
    return result
    
}

const sortArray = (state)=>{
    const result = state.toSorted((a,b)=> a - b)
    return result
}

const deleteArr = (state)=>{
  const copy = [...state]
  copy.pop()
  return copy

}

