import { Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';

const Nav = () => {
  const toggleMenu = () => {
    document.body.classList.toggle('no-scrolling');
    document.querySelector('.menu').classList.toggle('menu--show');
    const blur = document.querySelector('.blur');
    blur.classList.toggle('blur--show');
    if (blur.classList.contains('blur--unhidden')) {
      setTimeout(() => {
        blur.classList.toggle('blur--unhidden');
      }, 300);
    } else {
      blur.classList.toggle('blur--unhidden');
    }
  };

  return (
    <Fragment>
      <Navbar toggleMenu={toggleMenu} />
      <Menu toggleMenu={toggleMenu} />
    </Fragment>
  );
};

export default Nav;
