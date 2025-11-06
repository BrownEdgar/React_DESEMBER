
import { configureStore } from '@reduxjs/toolkit'
import postsSlice from '../features/posts/posts.slice'

export const store = configureStore({
  reducer: {
    posts: postsSlice
  }
})


export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']