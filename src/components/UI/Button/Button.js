import { Link } from 'react-router-dom';
import './Button.css';

// Button with text inside
const Button = (props) => {
  return props.isLink ? (
    <Link to={props.link} className="button">
      <p className="button__text">{props.children}</p>
    </Link>
  ) : (
    <a href={props.link} className="button">
      <p className="button__text">{props.children}</p>
    </a>
  );
};

export default Button;
