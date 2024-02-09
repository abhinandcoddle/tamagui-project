import {StyleSheet} from 'react-native';
import { tokens } from '../../../tamagui.config';
export default StyleSheet.create({
  switchStyle : {
    backgroundColor: '#fff',
    color: '#000',
  },
  switchLabel: {
    fontSize: 14,
    color: '#000',
  },
  switchThumb: {
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {width: 4, height: 8},
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  switchImg:{
    width: 40,
    height: 40,
    borderRadius: 8,
  }
});
