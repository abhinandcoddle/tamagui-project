import React from 'react';
import config, {tokens} from './tamagui.config';
import {Button, TamaguiProvider, XStack, YStack} from 'tamagui';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ToastProvider} from '@tamagui/toast';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import TestingScreen from './src/screens/TestingScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';

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

      <YStack gap='$2' paddingHorizontal={20}>
        <Buttons
          label={'Button'}
          icon={'Notification'}
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
          // icon={'Notification'}
          bgColor={tokens.color.defaultWhite}
          color={tokens.color.primaryColor}
          style={{
            borderRadius: tokens.radius.sm,
            borderColor: tokens.color.primaryColor,
          }}
        />
        <Buttons
          label={'Button'}
          icon={'Notification'}
          height={48}
          width={'46%'}
          bgColor={tokens.color.primaryColor}
          color={tokens.color.defaultWhite}
          style={{
            borderRadius: tokens.radius.full,
            borderColor: tokens.color.primaryColor,
          }}
        />

        <Buttons
          label={'Button'}
          // icon={'Notification'}
          height={48}
          width={'auto'}
          bgColor={tokens.color.defaultWhite}
          color={tokens.color.primaryColor}
          style={{
            borderRadius: tokens.radius.full,
            borderColor: tokens.color.primaryColor,
          }}
        />

        <InputField
          label='Placeholder text'
          pColor={tokens.color.defaultBlack}
          borderColor={tokens.color.primaryColor}
          borderWidth={1.5}
          borderRadius={tokens.radius.sm}
          width={'100%'}
          height={54}
          fontSize={16} 

        />

      </YStack>
    </TamaguiProvider>
  );
}
