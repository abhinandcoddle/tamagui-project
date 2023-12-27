import React from 'react';
import {Input} from 'tamagui';

type PropsType = {
  label?: string;
  style?: any;
  size?: any;
  pColor?: any;
};

export default (props: PropsType) => (
  <Input
    fontSize={props.size}
    placeholder={props.label}
    style={props.style}
    placeholderTextColor={props.pColor}
  />
);
