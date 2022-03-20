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
          <a href="/" onClick={props.toggleMenu}>
            Home
          </a>
        </li>
        <li className="menu__list-item">
          <a href="/#projects" onClick={props.toggleMenu}>
            Projects
          </a>
        </li>
        <li className="menu__list-item">
          <a href="/#experiences" onClick={props.toggleMenu}>
            Experiences
          </a>
        </li>
        <li className="menu__list-item">
          <a href="/#about" onClick={props.toggleMenu}>
            About
          </a>
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
              key={`social-button-${i}`}
            >
              <img
                src={social.icon}
                alt={social.alt}
                className="menu__social-icon no-select-or-drag"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
