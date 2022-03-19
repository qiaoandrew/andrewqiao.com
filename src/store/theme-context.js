import React, { useState, useEffect } from 'react';

const ThemeContext = React.createContext({
  theme: 'light',
  setLightTheme: () => {},
  setDarkTheme: () => {},
});

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      setTheme('dark');
    }
  }, []);

  const setLightTheme = () => {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
    setTheme('light');
  };

  const setDarkTheme = () => {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    setTheme('dark');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setLightTheme: setLightTheme,
        setDarkTheme: setDarkTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
