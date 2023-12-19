import {StyleSheet} from 'react-native';
import {styled, ScrollView} from 'tamagui';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  primaryButton: {
    marginBottom: 10,
  },
});

export const Container = styled(ScrollView, {
  flex: 1,
  paddingHorizontal: 24,
  marginTop: 25,
});
