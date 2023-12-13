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
    xsm: 16,
    ysm: 18,
    sm: 20,
    md: 30,
    lg: 40,
  },
  color: {},
  space: {},
  radius: {},
  zIndex: {},
});

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
export default tamaguiConfig;
