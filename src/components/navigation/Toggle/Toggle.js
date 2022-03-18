import { useEffect, useState } from 'react';
import classes from './Toggle.module.css';
import wavesLight from '../../../img/waves/waves-light.svg';
import wavesDark from '../../../img/waves/waves-dark.svg';

const Toggle = () => {
  const [theme, setTheme] = useState('light');

  const toggleClick = (event) => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    handleThemeChange(newTheme);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    document.getElementById('waves').src =
      newTheme === 'light' ? wavesLight : wavesDark;
  };

  useEffect(() => {
    var storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      document.documentElement.setAttribute('data-theme', storedTheme);
      handleThemeChange(storedTheme);
    }
  }, []);

  return (
    <div
      className={`${classes.toggle} ${
        theme === 'light' ? '' : classes['toggle-dark']
      }`}
      onClick={toggleClick}
    >
      <div />
    </div>
  );
};

export default Toggle;
