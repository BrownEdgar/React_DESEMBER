import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { IPost } from '../../types/types'
import axios from 'axios'


export interface PostsState {
  data: IPost[],
  loading: boolean,
  error: { message: string } | null
}

const initialState: PostsState = {
  data: [],
  loading: false,
  error: null
}

export const getAsyncPosts = createAsyncThunk("posts/getAsyncPosts", async () => {
  const response = await axios.get('http://localhost:3000/posts')
  return response.data
})

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncPosts.pending, (state) => {
        state.loading = true
      })
      .addCase(getAsyncPosts.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload as IPost[]
      })
      .addCase(getAsyncPosts.rejected, (state) => {
        state.loading = false;
        state.error = {
          message: 'error'
        }
      })
  }
})

export default postsSlice.reducer