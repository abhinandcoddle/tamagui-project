import React from 'react';
import {Button, Text, View} from 'tamagui';
import styles from './ButtonStyles';
import {icons} from '../../themeConfig/icons';
import {TouchableOpacity} from 'react-native';
import { tokens } from '../../../tamagui.config';
import CircleIcon from '../../assets/icons/Circle';

type PropsType = {
  color?: any;
  size?: number;
  bgColor?: any;
  label?: string;
  disabled?: boolean;
  onClick?: any;
  style?: any;
  textStyle?: any;
  type?: any;
  icon?: any;
  height?: any;
  width?: any;
};
export const Buttons = (props: PropsType) => {
  const Icon = icons[props.icon];

  return (
    <Button
      style={props.style}
      onPress={props.onClick}
      disabled={props.disabled}
      backgroundColor={props.bgColor}
      width={props.width}
      height={props.height}
      >
      {props.type === 'anchor' ? (
        <Text style={props.textStyle}>{props.label}</Text>
      ) : (
        <Text
          style={styles.buttonText}
          fontSize={props.size}
          color={props.color}>
          {props.label}
        </Text>
      )}
      {props.icon && (
        <View style={styles.iconStack}>
          {/* <Icon/> */}
          <CircleIcon />
        </View>
      )}
    </Button>
  );
};
