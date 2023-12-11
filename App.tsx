import React from 'react';
import {TamaguiProvider} from 'tamagui';
import config from './tamagui.config';
import {Container, HeaderText, styles} from './GlobalStyles';

import {SafeAreaView, StatusBar} from 'react-native';

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />

        <Container>
          <HeaderText size="md">Hi, Welcome</HeaderText>
        </Container>
      </SafeAreaView>
    </TamaguiProvider>
  );
}
