import { Link } from 'react-router-dom';
import classes from './Button.module.css';

const Button = (props) => {
  return props.isLink ? (
    <Link to={props.link} className={classes.button}>
      <p>{props.children}</p>
    </Link>
  ) : (
    <a href={props.link} className={classes.button}>
      <p>{props.children}</p>
    </a>
  );
};

export default Button;
