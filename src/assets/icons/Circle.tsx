import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Circle, View} from 'tamagui';
import {tokens} from '../../../tamagui.config';

type PropsType = {
    color?: any,
}

const CircleIcon = (props: PropsType) => {
  return (
    <View
      style={{
        width: 16,
        height: 16,
        borderColor: '#fff',
        borderWidth: 1.5,
        borderRadius: 999,
      }}></View>
  );
};

export default CircleIcon;
