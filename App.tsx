import React from 'react';
import config from './tamagui.config';
import {TamaguiProvider} from 'tamagui';
import {StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ToastProvider} from '@tamagui/toast';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <TamaguiProvider config={config}>
      <SafeAreaView />
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <ToastProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ToastProvider>
    </TamaguiProvider>
  );
}
