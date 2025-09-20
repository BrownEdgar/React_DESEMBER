import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';


export default function MainLayout() {
  return <div className='App'>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <footer>
      <p>&copy; 2025 My Website</p>
    </footer>
  </div>;
}
