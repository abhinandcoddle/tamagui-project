import React from 'react';
import {ScrollView, Sheet} from 'tamagui';
import BottomSheetHeader from './BottomSheetHeader';
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
        enterStyle={{opacity: 0}}
        exitStyle={{opacity: 0}}
      />
      <Sheet.Handle
        position="absolute"
        top={8}
        left="3%"
        width={40}
        height={6}
        bg={'lightgrey'}
      />
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
