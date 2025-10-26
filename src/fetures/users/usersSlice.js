import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUsersData } from './users-api';


export const fetchUsers = createAsyncThunk('users/fetchUsers', fetchUsersData)

const initialState = {
  data: [],
  edited: false,
  loading: false,
  error: null
}

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.data = payload;
    },
    addUser: (state, { payload }) => {
      return {
        data: [...state.data, payload],
        edited: true
      }

    },
    updateUser: (state, { payload }) => {
      return {
        data: state.data.map(user => user.id === payload.id ? payload : user),
        edited: true
      }
    },
    deleteUser: (state, { payload }) => {
      return {
        data: state.data.filter(user => user.id !== payload.id),
        edited: true
      }
    }
  },
  extraReducers: (bulder) => {
    bulder
      .addCase(fetchUsers.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        console.log(action);
        state.data = action.payload
        state.loading = false
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log(action);
        state.error = action.error.message
        state.data = []
        state.loading = false
      })
  }
})

export default usersSlice.reducer;
export const { addUser, deleteUser, setUsers, updateUser } = usersSlice.actions;

