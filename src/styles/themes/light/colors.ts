import common from '../common/colors';
import { colors as constantsColors } from '../constants';
const {BLACK, DARK, GRAY, WHITE} = constantsColors;

export const colors = {
  ...common,
  BACKGROUND: WHITE,
  TEXT: BLACK,
  ICON: BLACK,
  TEXT_SECONDARY: GRAY,

  ICON_NON_FOCUSED: GRAY,
  ICON_FOCUSED: DARK,

  PRIMARY: BLACK,
  ACCENT: WHITE,
  ADDITIONAL: GRAY
};