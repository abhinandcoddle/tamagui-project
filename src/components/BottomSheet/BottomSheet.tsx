import React from 'react';
import {ScrollView, Sheet} from 'tamagui';
import {HeaderText} from '../HeaderText/HeaderText';
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
        width="30%"
        height={8}
        bg={'lightgrey'}
      />
      <ScrollView>
        <Sheet.Frame
          justifyContent="center"
          alignItems="center"
          paddingVertical={20}>
          <HeaderText title={props.title} />
          {props.children}
        </Sheet.Frame>
      </ScrollView>
    </Sheet>
  );
};
