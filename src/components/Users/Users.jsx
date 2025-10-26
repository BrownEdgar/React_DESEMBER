import { useSelector, useDispatch } from 'react-redux';
import './Users.scss';
import { deleteUser, updateUser } from '../../fetures/users/usersSlice';
import { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
function Users() {
  const [user, setUser] = useState('');
  const [isShow, setIsShow] = useState(false);
  const { data, error, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const toggleInput = (user) => {
    setUser({ x: 1 });
    setIsShow(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ name: user.name, id: user.id, x: 1, y: 2 }));
    setIsShow(false);
  }
  console.log('loading', loading);

  if (error) {
    return <h1 className='error'>{error}</h1>
  }
  if (loading) {


    return <div className="Users">
      <SkeletonTheme
        baseColor="#444"
        containerClassName="skeleton"
        height={30}
        width={500}
      >
        <p>
          <Skeleton count={10} className="skeleton" />
        </p>
      </SkeletonTheme>
    </div>
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
        {data.map((user) => (
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
