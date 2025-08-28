


export const initialState = {
  data: [],
  loading: false,
  error: null
};

export const SAVE_ITEMS = 'SAVE_ITEMS'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'

export const reducer = (state, { type, payload }) => {

  switch (type) {
    case SAVE_ITEMS: return { loading: false, data: payload, error: null }
    case SET_LOADING: return { ...state, loading: payload }
    case SET_ERROR: return { ...state, loading: false, error: payload }
    default: return state
  }
}
