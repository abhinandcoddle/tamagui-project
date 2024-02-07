import {StyleSheet} from 'react-native';
import Fonts from '../../utils/Fonts';
import { tokens } from '../../../tamagui.config';

export default StyleSheet.create({
  buttonText: {
    fontFamily: Fonts.Inter500,
    fontSize: 16,
    paddingHorizontal: 26,
  },
  outlinedStyle: {
    fontFamily: Fonts.AVERTA_STD_BOLD,
  },
  activeStyle: {
    fontFamily: Fonts.AVERTA_STD_BOLD,
  },
  iconStack: {
    position: 'absolute',
    left: 16,
    borderRadius: 100,
  },
  iconStackRight: {
    position: 'absolute',
    right: 16,
  },
  buttonTextCenter: {
    fontFamily: Fonts.Inter500,
    fontSize: 16,
  },
  alignCenter: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: 70,
  },
});
