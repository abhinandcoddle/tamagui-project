import React, {useState} from 'react';
import {Input} from 'tamagui';
import { tokens } from '../../../tamagui.config';
import styles from './InputStyles';

type PropsType = {
  label?: string;
  style?: any;
  fontSize?: any;
  pColor?: any;
  borderColor?: any;
  width?: any;
  height?: any;
  borderWidth?: number;
  borderRadius?: any;
};


export default (props: PropsType) => (
  <Input
    fontSize={props.fontSize}
    placeholder={props.label}
    placeholderTextColor={props.pColor}
    style={styles.inputStyle}
    borderColor={props.borderColor}
    width={props.width}
    height={props.height}
    borderWidth={props.borderWidth}
    borderRadius={props.borderRadius}
  />
);
