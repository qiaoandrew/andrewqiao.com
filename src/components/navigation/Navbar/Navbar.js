import { Link } from 'react-router-dom';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';

// Top navigation bar
const Navbar = (props) => {
  return (
    <div className="navbar">
      <Link to="/">
        <h4 className="navbar__logo">AQ</h4>
      </Link>
      <div className="navbar__right">
        <Toggle />
        <div className="menu-btn" onClick={props.toggleMenu}>
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
