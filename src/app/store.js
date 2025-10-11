import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../fetures/users/usersSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
  },
})