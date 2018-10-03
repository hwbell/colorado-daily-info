import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import WeatherScreen from '../screens/WeatherScreen';
import LinksScreen from '../screens/SnowScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SnowScreen from '../screens/SnowScreen';

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
  showIcon: true, 
  tabBarLabel: 'Weather',
  tabBarOptions: {
    activeTintColor: '#AED6F1',
    inactiveTintColor: '#F2F3F4',
    style: {
      backgroundColor: 'black',
    },
  },
  tabBarIcon : () => {
    return <Image source={require('../assets/images/weather.png')} style={{width:30,height:30, marginTop:5}} />
  }
};

const SnowStack = createStackNavigator(
  {
    Snow: SnowScreen
  },
  navOps
  );

SnowStack.navigationOptions = {
  tabBarLabel: 'Ski',
  tabBarOptions: {
    activeTintColor: '#AED6F1',
    inactiveTintColor: '#F2F3F4',
    style: {
      backgroundColor: 'black',
    },
  },
  tabBarIcon : () => {
    return <Image source={require('../assets/images/snow.png')} style={{width:25,height:25, marginTop:5}} />
  }
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
    SnowStack,
    SettingsStack,
  },
  
);
