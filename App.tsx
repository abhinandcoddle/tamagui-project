import React from 'react';
import {TamaguiProvider, Theme, RadioGroup, YStack, XStack} from 'tamagui';
import config from './tamagui.config';
import {Container, HeaderText, styles} from './GlobalStyles';

import {SafeAreaView, StatusBar, View} from 'react-native';
import Button from './src/components/Button/Button';
import GlobalStyles from './GlobalStyles';
import InputField from './src/components/InputField/InputField';
import TextArea from './src/components/TextArea/TextArea';
import Checkbox from './src/components/Checkbox/Checkbox';
import RadioButton from './src/components/Radio/RadioButton';
import Card from './src/components/Card/Card';

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />

        <Container marginHorizontal="$2">
          <HeaderText size="md">Hi, Welcome</HeaderText>
          <InputField placeholder={'Full Name'} />
          <TextArea placeholder={'Enter your details...'} />

          <Checkbox label={'Accept terms and conditions'} />

          <RadioGroup
            aria-labelledby="Select one item"
            defaultValue="3"
            name="form">
            <YStack width={300} alignItems="center" space="$2">
              <RadioButton value={'2'} label={'Second value'} />
              <RadioButton value={'3'} label={'Third value'} />
            </YStack>
          </RadioGroup>

          <XStack $sm={{flexDirection: 'column'}}>
            <Card width={250} height={300} />
          </XStack>
        </Container>

        <Button
          variant={''}
          color={'#fff'}
          background={'blue'}
          title={'Signup'}
          disabled={false}
        />
      </SafeAreaView>
    </TamaguiProvider>
  );
}
