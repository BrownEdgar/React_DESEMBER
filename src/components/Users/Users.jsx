import { useSelector, useDispatch } from 'react-redux';
import './Users.scss';
import { deleteUser, updateUser } from '../../fetures/users/usersSlice';
import { useState } from 'react';

function Users() {
  const [user, setUser] = useState('');
  const [isShow, setIsShow] = useState(false);
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  const toggleInput = (user) => {
    setUser(user);
    setIsShow(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ name: user.name, id: user.id }));
    setIsShow(false);
  }

  return (
    <div className="Users">
      {
        isShow ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='edit user...'
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <button type='submit'>Update</button>
          </form>
        ) : null
      }
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <div>
              <button className="edit" onClick={() => toggleInput(user)}>Edit</button>
              <button onClick={() => dispatch(deleteUser({ id: user.id }))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
