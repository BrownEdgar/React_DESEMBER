// action typer 
 export const SAVE_ITEMS ="SAVE_ITEMS"
export const SET_LOADING = "SET_LOADING"

export const initialState ={
    data:[],
    loading:false
}
export const reducer = (state,action)=>{
      switch (action.type) {
        // action.payload-y datana vory stacelenq placeholderic ev gcum enq initialStateei  data=[]-i mej
        case SAVE_ITEMS:return {loading:false,data:action.payload}
        case SET_LOADING: return {...state,loading:action.payload}
        default: return state
     
      }
}
