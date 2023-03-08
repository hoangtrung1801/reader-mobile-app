import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen';
import HighlightScreen from '../screens/Highlight/HighlightScreen';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const HighlightIcon = ({color, size}) => (
  <MaterialCommunityIcon
    name="format-color-highlight"
    size={size}
    color={color}
  />
);

const HomeIcon = ({color, size}) => (
  <MaterialCommunityIcon name="home" size={size} color={color} />
);

const SettingsIcon = ({color, size}) => (
  <MaterialIcon name="settings" size={size} color={color} />
);

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Post">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: HomeIcon,
          }}
        />
        <Tab.Screen
          name="Highlight"
          component={HighlightScreen}
          options={{
            tabBarIcon: HighlightIcon,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={HomeScreen}
          options={{
            tabBarIcon: SettingsIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
