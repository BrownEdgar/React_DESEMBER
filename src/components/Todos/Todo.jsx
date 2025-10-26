import { Field, Form, Formik } from 'formik';
import "./Todo.scss";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../fetures/todos/todosSlice';

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();


  const handleSubmit = (values, { resetForm }) => {
    const data = {
      id: Date.now(),
      message: values.message
    }
    dispatch(addTodo(data));
    resetForm()
  }

  return (
    <div className='Todo'>
      <Formik
        initialValues={{ message: '' }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name="message" />
          <input type="submit" value="save" />
        </Form>
      </Formik>
      <hr />
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>{todo.message}</li>
          ))
        }
      </ul>

    </div>
  );
}

export default Todo;
