import { Link } from 'react-router-dom';
import Toggle from '../Toggle/Toggle';
import classes from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <Link to="/">
        <h4 className={classes.logo}>AQ</h4>
      </Link>
      <div className={classes['navbar-right']}>
        <Toggle />
        <div className={classes['menu-btn']} onClick={props.toggleMenu}>
          <p>Menu</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
