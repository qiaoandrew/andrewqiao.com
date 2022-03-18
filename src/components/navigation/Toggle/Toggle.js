import { useEffect, useState } from 'react';
import classes from './Toggle.module.css';

const Toggle = () => {
  const [theme, setTheme] = useState('light');

  const toggleClick = (event) => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    var storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      document.documentElement.setAttribute('data-theme', storedTheme);
      setTheme(storedTheme);
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
