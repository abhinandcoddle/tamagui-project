import React from 'react';
import {Button, Text} from 'tamagui';
import styles from './ButtonStyles';
import {icons} from '../../themeConfig/icons';
import {TouchableOpacity} from 'react-native';

type PropsType = {
  color?: string;
  size?: number;
  bgColor?: string;
  label?: string;
  disabled?: boolean;
  onClick?: any;
  style?: any;
  textStyle?: any;
  type?: any;
  icon?: any;
};
export const Buttons = (props: PropsType) => {
  const Icon = icons[props.icon];

  return (
    <Button
      style={props.style}
      onPress={props.onClick}
      disabled={props.disabled}
      backgroundColor={props.bgColor}>
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
        <TouchableOpacity style={styles.iconStack}>
          <Icon />
        </TouchableOpacity>
      )}
    </Button>
  );
};
