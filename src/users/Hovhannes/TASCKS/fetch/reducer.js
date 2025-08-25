


export const initialState = {
  data: [],
  loading: false,
  error: null
  
};

export const SAVE_ITEMS = "SAVE_ITEMS"
export const SET_LOADING = "SET_LOADING"
export const SET_ERROR = "SET_ERROR"

export const reducer = (state, action) => {
  switch (action.type) {
    case SAVE_ITEMS: return {loading: false, data: action.payload, error: null}
    case SET_LOADING: return { ...state, loading: action.payload}
    case SET_ERROR: return { ...state, loading: false, error: action.payload}
    default: return state
  }
}


