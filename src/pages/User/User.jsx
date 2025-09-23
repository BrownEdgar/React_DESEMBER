import { useParams } from 'react-router';

function User() {
  const { id } = useParams();

  return <div className='User'>
    <h1>User  N {id}</h1>
  </div>;
}

export default User;
