import React from 'react';
import {Button, Stack} from 'tamagui';
type PropsType = {
  label: string;
  color: string;
  bgColor: string;
  size: number;
  onClick: any;
  style?: any;
};

export const PrimaryButton = (props: PropsType) => {
  return (
    <Stack paddingHorizontal={20}>
      <Button
        borderRadius={100_00_00}
        onPress={props.onClick}
        color={props.color}
        fontSize={props.size}
        style={props.style}
        backgroundColor={props.bgColor}>
        {props.label}
      </Button>
    </Stack>
  );
};
