import { NavLink } from 'react-router';
import './Navbar.scss';

function Navbar() {
  return <header className="navbar">

    <nav>
      <ul className="navbar__links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  </header>;
}

export default Navbar;
