import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import { useState } from 'react';

export default function MainLayout() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'KXa7o@example.com' },
    { id: 2, name: 'Jane Smith', email: 'Fw6Q5@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'xGw4H@example.com' },
  ]);

  const addUser = (user) => {
    setUsers([...users, user]);
  }

  return <div className='App'>
    <Navbar />
    <main>
      <Outlet context={{ users, addUser }} />
    </main>
    <footer>
      <p>&copy; 2025 My Website</p>
    </footer>
  </div>;
}
