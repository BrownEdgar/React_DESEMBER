import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../fetures/counter/counterSlice'


export default configureStore({
  reducer: {
    counter: counterReducer
  }
})