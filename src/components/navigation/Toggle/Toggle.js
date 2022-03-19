import { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';
import './Toggle.css';

const Toggle = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className={`toggle ${
        themeContext.theme === 'light' ? '' : 'toggle-dark'
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
