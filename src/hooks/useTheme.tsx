import { useContext } from 'react';
import ThemeContext from '../context/context/ThemeContext';

export type useThemeType = () => any

const useTheme: useThemeType = () => useContext(ThemeContext);

export default useTheme;