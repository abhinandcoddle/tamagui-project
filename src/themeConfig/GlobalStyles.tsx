import {StyleSheet} from 'react-native';
import {styled, ScrollView} from 'tamagui';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  primaryButton: {
    marginVertical: 5,
  },
});

export const Container = styled(ScrollView, {
  backgroundColor: 'white',
});
