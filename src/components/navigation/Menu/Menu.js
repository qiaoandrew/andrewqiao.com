import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { about } from '../../../constants/constants';
import closeIcon from '../../../img/icons/close-icon.svg';
import classes from './Menu.module.css';

const Menu = (props) => {
  return (
    <Fragment>
      <div className={`${classes.blur} blur`} onClick={props.toggleMenu} />
      <div className={`${classes.menu} menu`}>
        <img
          src={closeIcon}
          alt="Close button"
          className={classes.close}
          onClick={props.toggleMenu}
        />
        <div className={classes.menu__list}>
          <Link to="/">Home</Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/#experiences">Experiences</Link>
          <Link to="/#about">About</Link>
        </div>
        <div className={classes.email}></div>
        <div className={classes.socials}>
          <p>andrewqiao2004@gmail.com</p>
          <div className={classes['social__buttons']}>
            {about.socials.map((social) => (
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className={classes['socials__button']}
              >
                <img
                  src={social.icon}
                  alt=""
                  className={classes['socials__icon']}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
