import React from 'react';
import {TamaguiProvider, Theme} from 'tamagui';
import config from './tamagui.config';
import {Container, HeaderText, styles} from './GlobalStyles';

import {SafeAreaView, StatusBar, View} from 'react-native';
import Button from './src/components/Button/Button';
import GlobalStyles from './GlobalStyles'
import InputField from './src/components/InputField/InputField';

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />

          <Container marginHorizontal="$2">
            <HeaderText size="md">Hi, Welcome</HeaderText>
            <InputField/>
          </Container>
          <Button />
      </SafeAreaView>
    </TamaguiProvider>
  );
}
