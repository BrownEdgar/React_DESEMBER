import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, message: 'hello world' },
]


const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      return [...state, payload]
    }
  },
});

export default todosSlice.reducer;
export const { addTodo } = todosSlice.actions;