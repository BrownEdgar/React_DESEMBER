import { useState } from 'react';
import './App.scss'

function App() {
  const [errors, setErrors] = useState({
    username: {
      error: false,
      tached: false,
      message: "Username must by start with uppercase"
    },
    password: {
      error: false,
      tached: false,
      message: "must contain a number and more then 10 charaster"
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username')
    const password = formData.get('password')
    const x = !/^[A-Z]/.test(username)
    const y = !(password.length > 10 && /\d/.test(password))
    const copy = { ...errors }
    copy.username.error = x
    copy.password.error = y
    setErrors(copy)
  }

  const handleFocus = (e) => {
    const { name } = e.target;
    const copy = { ...errors }
    copy[name].tached = true;
    setErrors(copy)
  }

  return <div className='App'>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id='username'
        name='username'
        placeholder='enter your username'
        onFocus={handleFocus}
      />
      <p className='error'>{(errors.username.tached && errors.username.error) ? errors.username.message : ""}</p>
      <input
        type="password"
        id='password'
        name='password'
        placeholder='password'
        onFocus={handleFocus}
      />
      <p className='error'>{(errors.password.tached && errors.password.error) ? errors.password.message : ""}</p>
      <input type="submit" value="Login" />
    </form>
  </div>;
}

export default App;
