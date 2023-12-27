import React from 'react';
import {Stack, Text} from 'tamagui';
import styles from './BottomSheetStyles';
type PropsType = {
  title?: string;
};

const BottomSheetHeader = (props: PropsType) => {
  return (
    <Stack
      height={40}
      marginTop={20}
      width="100%"
      jc="center"
      ai="center"
      bbw={2}
      bbc="#E2E2E2">
      <Text style={styles.headerTitle}>{props.title}</Text>
    </Stack>
  );
};

export default BottomSheetHeader;
