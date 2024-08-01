import React, { useContext, useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

const ThemeMap = {
  sketchy: 'https://bootswatch.com/5/sketchy/bootstrap.min.css',
  morph: 'https://bootswatch.com/5/morph/bootstrap.min.css',
  minty: 'https://bootswatch.com/5/minty/bootstrap.min.css',
  solar: 'https://bootswatch.com/5/solar/bootstrap.min.css',
};

const ThemeContext = React.createContext({});

export default function BootstrapThemeProvider(props) {
  const [isTheme, setTheme] = useLocalStorage('isTheme', 'cosmo');

  useEffect(() => {
    if (isTheme) {
      var themesheet = document.createElement('link');
      themesheet.href = ThemeMap[isTheme];
      themesheet.id = 'isTheme';
      themesheet.rel = 'stylesheet';

      const prevTheme = document.getElementById('isTheme');
      if (prevTheme) {
        document.head.removeChild(prevTheme);
      }
      if (isTheme !== 'cosmo') {
        document.head.append(themesheet);
      }
    }
  }, [isTheme]);

  return (
    <ThemeContext.Provider value={{ isTheme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export const useBootstrapTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Use <BootstrapThemeProvider> in Parent.');
  }

  return context;
};
