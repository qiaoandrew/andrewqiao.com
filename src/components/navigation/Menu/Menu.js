import { Link } from 'react-router-dom';
import { about } from '../../../constants/constants';
import closeIcon from '../../../img/icons/close-icon.svg';
import './Menu.css';

// Side menu
const Menu = (props) => {
  return (
    <div className="menu">
      <img
        src={closeIcon}
        alt="Close button"
        className="menu__close"
        onClick={props.toggleMenu}
      />
      <ul className="menu__list">
        <li className="menu__list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu__list-item">
          <Link to="/#projects">Projects</Link>
        </li>
        <li className="menu__list-item">
          <Link to="/#experiences">Experiences</Link>
        </li>
        <li className="menu__list-item">
          <Link to="/#about">About</Link>
        </li>
      </ul>
      <div className="menu__socials">
        <p className="menu__email">andrewqiao2004@gmail.com</p>
        <div className="menu__social-buttons">
          {about.socials.map((social, i) => (
            <a
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="menu__social-button"
              key={`social${i}`}
            >
              <img src={social.icon} alt="" className="menu__social-icon" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
