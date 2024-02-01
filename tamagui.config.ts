import {config} from '@tamagui/config/v2';
import {createTamagui, createTokens} from 'tamagui';
const tamaguiConfig = createTamagui(config);

type Conf = typeof tamaguiConfig;

export const tokens = createTokens({
  size: {
    sm: 100,
    md: 200,
    lg: 300,
  },
  font: {
    sm: 24,
    md: 36,
    lg: 48,
  },
  color: {
    primaryColor: '#6432C8',
    secondaryColor: '#3C3C3C',
    disabledColor: '#E3E5E5',
    defaultWhite: '#FFFFFF',
    grayColor: '#979C9E',
    lightColor: '#CDCFD0',

  },
  space: {},
  radius: {
    sm: 8,
    full: 999,
  },
  zIndex: {},
  
});

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
export default tamaguiConfig;
