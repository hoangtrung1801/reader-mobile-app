import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Appearance, StatusBar} from 'react-native';
import HomeScreen from '../screens/Home/HomeScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const colorScheme = Appearance.getColorScheme();

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'dark-content' : 'light-content'}
      />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Post" component={PostScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
