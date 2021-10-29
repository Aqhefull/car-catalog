import {createContext} from 'react';
import theme from '../../styles/themes';
const defaultTheme = theme.default;
const ThemeContext = createContext(defaultTheme);

export default ThemeContext;