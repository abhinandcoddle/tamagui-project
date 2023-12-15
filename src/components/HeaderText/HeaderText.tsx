import React from 'react';
import {Stack, Text} from 'tamagui';
type PropsType = {
  title?: string;
  size?: number;
  color?: string;
};

export const HeaderText = (props: PropsType) => {
  return (
    <Stack paddingVertical={8}>
      <Text fontSize={props.size} color={props.color} textAlign="center">
        {props.title}
      </Text>
    </Stack>
  );
};
