import { Outlet } from 'react-router';

function AuthLayout() {
  return <div className='Auth'>
    <Outlet />
  </div>;
}

export default AuthLayout;
