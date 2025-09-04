import { useState } from 'react';
import './App.scss'
import User from './UserDto';
import { checkUserbyEmail } from '../../utils/checkUserbyEmail';

function App() {

  //   {id: 1, email: "sada", username: "as", password: 'password'}
  const [users, setusers] = useState([]);
  const [currentId, setCurrentId] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = e.target;

    const x = checkUserbyEmail(users, email.value)
    if (x) {
      alert("user alredy exist");
      return
    }
    const user = new User(username.value, email.value, password.value);
    setusers([...users, user])
    // e.target.reset()
  }


  const togglePassword = (id) => {
    // 3
    setCurrentId(currentId === id ? null : id)
  }

  return (
    <>
      <div className='App'>
        <h1>Register</h1>
        <form className='App__form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username</label>
            <input type="text" id='username' name='username' required />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input type="email" id='email' name='email' required />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type="password" id='password' name='password' required />
          </div>
          <div>
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>

      <div className="users">
        {
          users.map((user) => {
            return (
              <div key={user.id}>
                <h1>{user.username}</h1>
                <p>Email:{user.email} </p>
                <p>password: {`${currentId === user.id ? user.password : '***********'}`} <span onClick={() => togglePassword(user.id)}>{'👀'}</span> </p>
              </div>
            )
          })
        }
      </div>
    </>

  );
}

export default App;
