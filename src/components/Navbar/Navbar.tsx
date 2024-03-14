import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="menu-options">
          <li>
            <Link to={'/home'}>Inicio</Link>
          </li>
          <li>
            <Link to={'/categories'}>Categorias</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
