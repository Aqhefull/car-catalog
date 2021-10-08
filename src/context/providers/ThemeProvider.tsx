import React, {useEffect, useState} from 'react';
import ThemeContext from '../context/ThemeContext';
import theme from '../../styles/themes';

type Props = {
    children: React.ReactNode
  };
export const ThemeProvider = ({
  children
}: Props) => {
  const [styleTheme, setStyleTheme] = useState(theme.default);
  
  useEffect(() => {
    // We'd get the theme from a web API / local storage in a real app
    // We've hardcoded the theme in our example
    const currentTheme = theme.default;
    setStyleTheme(currentTheme);
  }, []);
  
  return (
    <ThemeContext.Provider value={styleTheme}>
      {children}
    </ThemeContext.Provider>
  );
};