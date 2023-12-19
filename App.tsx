import React from 'react';
import config from './tamagui.config';
import {TamaguiProvider} from 'tamagui';
import {StatusBar, View} from 'react-native';
import {styles} from './src/themeConfig/GlobalStyles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <View style={styles.safeAreaView}>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </TamaguiProvider>
  );
}
