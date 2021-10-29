import useTheme from './useTheme';

type stylesType = (theme: any) => any

const useThemeStyleSheet = (styles: stylesType) => styles(useTheme());
export default useThemeStyleSheet;