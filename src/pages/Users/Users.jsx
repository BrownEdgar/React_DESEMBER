import { Link, useNavigate, useOutletContext } from 'react-router';
import './Users.scss';

function Users() {
  const { users } = useOutletContext();
  const navigate = useNavigate();

  return <div className='Users'>
    <h1>Users Page</h1>
    <button onClick={() => navigate(-1)}>Go Back</button>
    <Link to="/add-user">Go to Add User Form</Link>
    <div className="Users__wrapper">
      {
        users.map((user) => (
          <div key={user.id} className="Users__card">
            <h2>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Age:</strong> {user.age}</p>
          </div>
        ))
      }
    </div>
  </div>;
}

export default Users;
