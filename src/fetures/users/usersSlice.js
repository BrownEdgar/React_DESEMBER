import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  edited: false
}

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.data = payload;
    },
    addUser: (state, { payload }) => {
      state.data.push(payload);
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
  }
})

export default usersSlice.reducer;
export const { addUser, deleteUser, setUsers, updateUser } = usersSlice.actions;

