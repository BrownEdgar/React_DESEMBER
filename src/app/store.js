import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../fetures/users/usersSlice'
import todosReducer from '../fetures/todos/todosSlice'
import { toast } from 'react-toastify';

const timeLogger = () => (next) => (action) => {
  console.log(new Date().toLocaleTimeString(), action);
  next(action)
}

const checkMessage = (api) => (next) => (action) => {
  const todos = api.getState().todos;
  if (action.type === 'todos/addTodo') {
    const exists = todos.some((todo) => todo.message === action.payload.message);
    if (exists) {
      return toast.warn("TODO IS ALREDY EXISTS");
    }
  }

  next(action)
}


export default configureStore({
  reducer: {
    users: usersReducer,
    todos: todosReducer
  },
  middleware: (getDefaultMiddleware) =>
    [
      ...getDefaultMiddleware(),
      timeLogger,
      checkMessage,
    ],
})