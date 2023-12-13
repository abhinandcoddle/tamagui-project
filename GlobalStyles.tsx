import {StyleSheet} from 'react-native';
import {Button, Input, Stack, Text, styled, ScrollView} from 'tamagui';
import {tokens} from './tamagui.config';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export const Container = styled(ScrollView, {
  flex: 1,
  pt: '12%',
});
export const SubContainer = styled(Stack, {
  width: '100%',
  alignItems: 'center',
});

export const HeaderText = styled(Text, {
  ta: 'center',
  variants: {
    size: {
      xsm: {fontSize: tokens.font.xsm},
      ysm: {fontSize: tokens.font.ysm},
      sm: {fontSize: tokens.font.sm},
      md: {fontSize: tokens.font.md},
      lg: {fontSize: tokens.font.lg},
    },
  },
});

export const InputText = styled(Input, {
  width: '90%',
  height: '$5',
  mb: 15,
  fontSize: '$6',
});

export const SubmitButton = styled(Button, {
  width: '90%',
  color: 'white',
  fontSize: '$6',
});
