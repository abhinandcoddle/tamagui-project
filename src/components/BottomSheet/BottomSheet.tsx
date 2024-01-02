import React from 'react';
import {ScrollView, Sheet} from 'tamagui';
import BottomSheetHeader from './BottomSheetHeader';
import styles from './BottomSheetStyles';
type PropsType = {
  open?: boolean;
  setOpen?: any;
  title?: string;
  children?: any;
};

export const BottomSheet = (props: PropsType) => {
  return (
    <Sheet
      forceRemoveScrollEnabled={props.open}
      open={props.open}
      onOpenChange={props.setOpen}
      snapPointsMode={'fit'}
      dismissOnSnapToBottom
      moveOnKeyboardChange
      zIndex={100_000}
      animation="medium">
      <Sheet.Overlay
        animation="medium"
        backgroundColor="#000000ab"
        enterStyle={styles.sheetStyle}
        exitStyle={styles.sheetStyle}
      />
      <Sheet.Handle marginBottom={-10} height={5} bg={'lightgrey'} />
      <ScrollView>
        <Sheet.Frame
          justifyContent="center"
          alignItems="center"
          paddingVertical={0}>
          <BottomSheetHeader title={props.title} />
          {props.children}
        </Sheet.Frame>
      </ScrollView>
    </Sheet>
  );
};
