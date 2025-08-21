export const intialState = [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
export const reducer = (state,action)=>{
   switch(action.type){
    case"sort": return sortItem(state)
    case"add": return addItem(state,action.payload.n)
    case"delete": return deletNum(state)
    case"square": return squareElem(state)
    default :  return state
   }
}
 const sortItem=(state)=>{
    // - կսորտավորի զանգվածը  և կջնջի ամենամեծ 3 թվերը այդ զանգվածից։
    return state.toSorted((a,b) => a - b).slice(0,-3)

}

const addItem = (state,payload)=>{
// - կավելացնի նոր թիվ, որը պետք է փոխանցել payload-ի միջոցով,բայց եթե այդ թիվը արդեն կա զանգվածի մեջ պետք է սչինչ չանել:
 if(state.includes(payload)){
    return state;
 }
 return [...state,payload];
}

const deletNum =(state)=>{
    // կջնջի զանգվածի մեջից ամենափոքր թիվը,
   const min = Math.min(...state)
   const index = state.indexOf(min)
   return state.filter((_,idx)=> idx !== index)

}

const squareElem = (state)=>{
    // - զանգվածի բոլոր էլեմենտը բարձրացնում է քառակուսի
    return state.map((elem)=>elem ** 2)
}


