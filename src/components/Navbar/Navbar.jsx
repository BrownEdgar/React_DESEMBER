import { NavLink } from 'react-router';
import './Navbar.scss';
import { menuItems } from '../../constants/constants';

function Navbar() {
  return <header className="navbar">

    <nav>
      <ul className="navbar__links">
        {menuItems.map(item => (
          <li key={item.name}>
            <NavLink to={item.path}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>;
}

export default Navbar;
