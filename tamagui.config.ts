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
    red: 'red',
    blue: 'blue',
    green: 'green',
  },
  space: {},
  radius: {},
  zIndex: {},
});

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
export default tamaguiConfig;
