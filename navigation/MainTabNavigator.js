import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import WeatherScreen from '../screens/WeatherScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LinksExtScreen from '../screens/LinksExtScreen';

const navOps = {
  navigationOptions: {
    header: null
  },
};

const WeatherStack = createStackNavigator(
  {
    Home: WeatherScreen,
  },
  navOps
  );

WeatherStack.navigationOptions = {
  tabBarLabel: 'Weather',
  tabBarOptions: {
    activeTintColor: '#AED6F1',
    inactiveTintColor: '#F2F3F4',
    style: {
      backgroundColor: 'black',
    },
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  navOps
  );

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarOptions: {
    activeTintColor: '#AED6F1',
    inactiveTintColor: '#F2F3F4',
    style: {
      backgroundColor: 'black',
    },
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  navOps
  );


SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarOptions: {
    activeTintColor: '#AED6F1',
    inactiveTintColor: '#F2F3F4',
    style: {
      backgroundColor: 'black',
    },
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator(
  {
    WeatherStack,
    LinksStack,
    SettingsStack,
  },
  
);
