import { ToastContainer } from 'react-toastify'
import Todo from './src/components/Todos/Todo'

export default function App() {

  return (
    <div className='App'>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        theme="dark"
      />
      <Todo />
    </div>
  )
}