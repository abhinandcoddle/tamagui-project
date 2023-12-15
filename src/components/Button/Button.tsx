import React from 'react';
import {Button, Stack} from 'tamagui';

type PropsType = {
  variant?: any;
  color?: string;
  size: number;
  bgColor?: string;
  label?: string;
  disabled?: boolean;
  onClick: any;
  style?: any;
};
export default (props: PropsType) => (
  <Stack paddingHorizontal={20}>
    <Button
      fontSize={props.size}
      backgroundColor={props.bgColor}
      color={props.color}
      style={props.style}
      onPress={props.onClick}
      disabled={props.disabled}
      variant={props.variant}>
      {props.label}
    </Button>
  </Stack>
);
