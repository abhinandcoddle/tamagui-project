import {StyleSheet} from 'react-native';
import {Stack, Text, styled} from 'tamagui';
import {tokens} from './tamagui.config';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    padding: 10,
  },
});

export default StyleSheet.create({
  Container: {
    marginHorizontal: 20,
    backgroundColor: 'blue',
  },
});

export const Container = styled(Stack, {
  flex: 1,
});

export const HeaderText = styled(Text, {
  variants: {
    size: {
      sm: {
        fontSize: tokens.font.sm,
      },
      md: {
        fontSize: tokens.font.md,
      },
      lg: {
        fontSize: tokens.font.lg,
      },
    },
  },
});
