import { colors } from '../constants';
const {BLACK, GREEN, RED} = colors;

type commonProps = {
    PRIMARY: string
    SUCCESS: string
    ERROR: string
  }
  
const common: commonProps = {
  PRIMARY: BLACK,
  SUCCESS: GREEN,
  ERROR: RED,
};

export default common;