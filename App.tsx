import React from 'react';
import config, {tokens} from './tamagui.config';
import {
  Button,
  ScrollView,
  Switch,
  TamaguiProvider,
  XStack,
  YStack,
  Text,
} from 'tamagui';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ToastProvider} from '@tamagui/toast';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import TestingScreen from './src/screens/TestingScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import {SwitchWithLabel} from './src/components/Switch/Switch';

import {Buttons} from './src/components/Button/Button';
import {
  ChevronRight,
  Cloud,
  Moon,
  Star,
  Sun,
  Apple,
} from '@tamagui/lucide-icons';
import {Container} from './src/themeConfig/GlobalStyles';
import InputField from './src/components/InputField/InputField';
import Fonts from './src/utils/Fonts';
import SmallButton from './src/components/Button/SmallButton';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <TamaguiProvider config={config}>
      {/* <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      /> */}
      {/* <ToastProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Test"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Test" component={TestingScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ToastProvider> */}

      <ScrollView>
        <YStack gap="$4" padding={20}>
          <Buttons
            label={'Button'}
            height={48}
            width={'auto'}
            bgColor={tokens.color.primaryColor}
            color={tokens.color.defaultWhite}
            style={{
              borderRadius: tokens.radius.sm,
              borderColor: tokens.color.primaryColor,
            }}
          />

          <Buttons
            label={'Button'}
            height={48}
            width={'auto'}
            bgColor={tokens.color.defaultWhite}
            color={tokens.color.primaryColor}
            style={{
              borderRadius: tokens.radius.sm,
              borderColor: tokens.color.primaryColor,
            }}
          />

          <Buttons
            label={'Button'}
            disabled={true}
            height={48}
            width={'auto'}
            style={{
              borderRadius: tokens.radius.full,
              borderColor: tokens.color.disabledColor,
            }}
          />

          <Buttons
            label={'Button'}
            disabled={false}
            height={48}
            width={'auto'}
            icon={'Notification'}
            iconRight={false}
            bgColor={tokens.color.primaryColor}
            color={tokens.color.defaultWhite}
            style={{
              borderRadius: tokens.radius.full,
              borderColor: tokens.color.disabledColor,
            }}
          />

          <Buttons
            label={'Button'}
            disabled={false}
            height={48}
            width={'auto'}
            icon={'Notification'}
            iconRight={false}
            bgColor={'transparent'}
            color={tokens.color.primaryColor}
            style={{
              borderRadius: tokens.radius.full,
              borderColor: tokens.color.primaryColor,
            }}
          />

          <Buttons
            label={'Button'}
            disabled={false}
            height={48}
            width={'auto'}
            icon={'Notification'}
            iconRight={true}
            bgColor={tokens.color.primaryColor}
            color={tokens.color.defaultWhite}
            style={{
              borderRadius: tokens.radius.full,
              borderColor: tokens.color.primaryColor,
            }}
          />

          <Buttons
            label={'Button'}
            disabled={false}
            height={48}
            width={'auto'}
            icon={'Notification'}
            alignCenter={true}
            bgColor={tokens.color.primaryColor}
            color={tokens.color.defaultWhite}
            style={{
              borderRadius: tokens.radius.full,
              borderColor: tokens.color.primaryColor,
            }}
          />

          <Buttons
            label={'Button'}
            disabled={false}
            height={48}
            width={'auto'}
            // icon={'Notification'}
            bgColor={'transparent'}
            color={tokens.color.primaryColor}
            style={{
              borderRadius: tokens.radius.full,
              borderColor: 'transparent',
            }}
          />

          <Buttons
            label={'Button'}
            disabled={false}
            height={48}
            width={'auto'}
            // icon={'Notification'}
            bgColor={tokens.color.secondaryColor}
            color={tokens.color.defaultWhite}
            style={{
              borderRadius: tokens.radius.sm,
              borderColor: 'transparent',
            }}
          />

          <Buttons
            label={'Button'}
            disabled={false}
            height={48}
            width={'auto'}
            // icon={'Notification'}
            bgColor={'transparent'}
            color={tokens.color.secondaryColor}
            style={{
              borderRadius: tokens.radius.sm,
              borderColor: tokens.color.secondaryColor,
            }}
          />

          <Buttons
            label={'Button'}
            disabled={true}
            height={48}
            width={'auto'}
            // icon={'Notification'}
            color={tokens.color.secondaryColor}
            style={{
              borderRadius: tokens.radius.sm,
              borderColor: tokens.color.disabledColor,
            }}
          />

          <Buttons
            label={'Button'}
            disabled={false}
            height={48}
            width={'auto'}
            icon={'Notification'}
            alignCenter={false}
            bgColor={tokens.color.secondaryColor}
            color={tokens.color.defaultWhite}
            style={{
              borderRadius: tokens.radius.sm,
              borderColor: tokens.color.secondaryColor,
            }}
          />

          <Buttons
            label={'Button'}
            disabled={false}
            height={48}
            width={'auto'}
            icon={'Notification'}
            iconRight={true}
            alignCenter={false}
            bgColor={tokens.color.secondaryColor}
            color={tokens.color.defaultWhite}
            style={{
              borderRadius: tokens.radius.sm,
              borderColor: tokens.color.secondaryColor,
            }}
          />

          <Buttons
            label={'Button'}
            disabled={false}
            height={48}
            width={'auto'}
            icon={'Notification'}
            alignCenter={true}
            iconRight={true}
            bgColor={tokens.color.secondaryColor}
            color={tokens.color.defaultWhite}
            style={{
              borderRadius: tokens.radius.sm,
              borderColor: tokens.color.secondaryColor,
            }}
          />

          <XStack justifyContent="space-between">
            <SmallButton
              maxWidth={82}
              height={48}
              label={'Label'}
              bgColor={tokens.color.primaryColor}
              color={tokens.color.defaultWhite}
              borderRadius={tokens.radius.sm}
            />
            <SmallButton
              maxWidth={48}
              height={48}
              label={'+'}
              bgColor={'transparent'}
              color={tokens.color.primaryColor}
              borderRadius={tokens.radius.sm}
              borderColor={tokens.color.primaryColor}
            />
            <SmallButton
              maxWidth={48}
              height={48}
              label={'+'}
              bgColor={tokens.color.primaryColor}
              color={tokens.color.defaultWhite}
              borderRadius={tokens.radius.full}
            />
            <SmallButton
              maxWidth={48}
              height={48}
              label={'+'}
              bgColor={'transparent'}
              color={tokens.color.primaryColor}
              borderRadius={tokens.radius.full}
              borderColor={tokens.color.primaryColor}
            />
          </XStack>

          <Buttons
            label={'Button'}
            disabled={false}
            height={48}
            width={115}
            // icon={'Notification'}
            alignCenter={true}
            iconRight={true}
            bgColor={tokens.color.primaryColor}
            color={tokens.color.defaultWhite}
            style={{
              borderRadius: tokens.radius.full,
              borderColor: tokens.color.primaryColor,
            }}
          />

          <Buttons
            label={'Button'}
            disabled={false}
            height={48}
            width={140}
            icon={'Notification'}
            alignCenter={true}
            iconRight={true}
            bgColor={tokens.color.primaryColor}
            color={tokens.color.defaultWhite}
            style={{
              borderRadius: tokens.radius.full,
              borderColor: tokens.color.primaryColor,
            }}
          />

          <Buttons
            label={'Button'}
            disabled={false}
            height={48}
            width={140}
            icon={'Notification'}
            alignCenter={true}
            iconRight={false}
            bgColor={tokens.color.primaryColor}
            color={tokens.color.defaultWhite}
            style={{
              borderRadius: tokens.radius.full,
              borderColor: tokens.color.primaryColor,
            }}
          />

          <Buttons
            label={'Button'}
            disabled={false}
            height={48}
            width={115}
            // icon={'Notification'}
            alignCenter={true}
            iconRight={true}
            bgColor={tokens.color.purpleColor}
            color={tokens.color.primaryColor}
            style={{
              borderRadius: tokens.radius.full,
              borderColor: tokens.color.purpleColor,
            }}
          />

          <Buttons
            label={'Button'}
            disabled={false}
            height={48}
            width={140}
            icon={'Notification'}
            alignCenter={true}
            iconRight={true}
            bgColor={tokens.color.purpleColor}
            color={tokens.color.primaryColor}
            style={{
              borderRadius: tokens.radius.full,
              borderColor: tokens.color.purpleColor,
            }}
          />

          <Buttons
            label={'Button'}
            disabled={false}
            height={48}
            width={140}
            icon={'Notification'}
            alignCenter={true}
            iconRight={false}
            bgColor={tokens.color.purpleColor}
            color={tokens.color.primaryColor}
            style={{
              borderRadius: tokens.radius.full,
              borderColor: tokens.color.purpleColor,
            }}
          />

          <Buttons
            label={'Button'}
            disabled={false}
            height={32}
            width={90}
            // icon={'Notification'}
            alignCenter={true}
            iconRight={true}
            bgColor={tokens.color.primaryColor}
            color={tokens.color.defaultWhite}
            style={{
              borderRadius: tokens.radius.full,
              borderColor: tokens.color.primaryColor,
            }}
          />

          <Buttons
            label={'Button'}
            disabled={false}
            height={32}
            width={100}
            icon={'Notification'}
            alignCenter={true}
            iconRight={true}
            bgColor={tokens.color.primaryColor}
            color={tokens.color.defaultWhite}
            style={{
              borderRadius: tokens.radius.full,
              borderColor: tokens.color.primaryColor,
            }}
          />

          <XStack gap="$3" $xs={{flexDirection: 'column'}}>
            <SwitchWithLabel
              displaySwitch={false}
              size="$4"
              title="Title"
              defaultChecked
              width={54}
              bgColor={tokens.color.successColor}
            />
            <SwitchWithLabel
              displaySwitch={true}
              size="$4"
              title="Title"
              defaultChecked
              width={54}
              bgColor={tokens.color.successColor}
            />
            <SwitchWithLabel
              displaySwitch={true}
              size="$4"
              title="Title"
              defaultChecked
              width={54}
              bgColor={tokens.color.successColor}
              value={"Value"}
              image={true}
            />

            <SwitchWithLabel
              displaySwitch={true}
              size="$1"
              title="Label"
              width={26}
              defaultChecked
              bgColor={tokens.color.successColor}
              value={"Value"}
              image={false}
              labelRight={true}
            />

            <SwitchWithLabel
              displaySwitch={true}
              size="$4"
              title="Remember me"
              defaultChecked
              width={54}
              bgColor={tokens.color.primaryColor}
              value={"Value"}
              image={false}
              labelRight={true}
            />

            <SwitchWithLabel
              displaySwitch={true}
              size="$4"
              title="Accept terms and conditions"
              titleColor={'#4B2697'}
              defaultChecked
              width={54}
              bgColor={tokens.color.primaryColor}
              value={"Value"}
              image={false}
              labelRight={false}
            />

          </XStack>
        </YStack>
      </ScrollView>
    </TamaguiProvider>
  );
}
