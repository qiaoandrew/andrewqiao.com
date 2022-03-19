import { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';
import classes from './Toggle.module.css';

const Toggle = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className={`${classes.toggle} ${
        themeContext.theme === 'light' ? '' : classes['toggle-dark']
      }`}
      onClick={
        themeContext.theme === 'light'
          ? themeContext.setDarkTheme
          : themeContext.setLightTheme
      }
    >
      <div />
    </div>
  );
};

export default Toggle;
