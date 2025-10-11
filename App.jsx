
import { useDispatch, useSelector } from 'react-redux'
import Users from './src/components/Users/Users'
import { addUser, setUsers } from './src/fetures/users/usersSlice'
import { useEffect } from 'react'
import axios from 'axios'

export default function App() {
  const dispatch = useDispatch()
  const handleAddUser = () => {
    //{ id: Date.now(), name: 'New User' } === payload
    dispatch(addUser({ id: Date.now(), name: 'New User' }))
  }

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users', {
      params: { _limit: 5 }
    })
      .then(response => {
        const usersData = response.data.map(user => ({ id: user.id, name: user.name }))
        dispatch(setUsers(usersData));
      })
  }, [])



  return (
    <div className='App'>
      <div>
        <button onClick={handleAddUser}>Add User</button>
        <h1>Users</h1>

        <Users />
      </div>
    </div>
  )
}