import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import { Icon } from 'react-native-elements'


import IntroScreen from '../screens/IntroScreen';
import WeatherScreen from '../screens/WeatherScreen';
import SnowScreen from '../screens/SnowScreen';
import TrafficScreen from '../screens/TrafficScreen'
import AboutScreen from '../screens/AboutScreen';

const navOps = {
  navigationOptions: {
    header: null
  },
};

const tabBarOps = {
  activeTintColor: 'white',
  inactiveTintColor: '#F2F3F4',
  style: {
    height: 55,
    backgroundColor: 'black',
  },
  indicatorStyle: {
    backgroundColor: '#F2F3F4',
  },
  labelStyle: {
    fontSize: 9,
    fontFamily: 'Cabin',
    marginTop: 4
  },
  tabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  showIcon: true,
}

const iconStyle = {
  width: 30, 
  height: 30, 
  marginTop: 5,
}

const IntroStack = createStackNavigator(
  {
    Home: IntroScreen,
  },
  navOps
);

IntroStack.navigationOptions = {
  tabBarOptions: tabBarOps,
  tabBarIcon: () => {
    return <Image source={require('../assets/tab-navigator/icons/mountains.png')} style={iconStyle} />
  }
};

const WeatherStack = createStackNavigator(
  {
    Home: WeatherScreen,
  },
  navOps
);

WeatherStack.navigationOptions = {
  tabBarOptions: tabBarOps,
  tabBarIcon: () => {
    return <Image source={require('../assets/tab-navigator/icons/cloud.png')} style={{ width: 30, height: 30, marginTop: 5 }} />
  }
};

const SnowStack = createStackNavigator(
  {
    Snow: SnowScreen
  },
  navOps
);

SnowStack.navigationOptions = {
  tabBarOptions: tabBarOps,
  tabBarIcon: () => {
    return <Image source={require('../assets/tab-navigator/icons/skiing.png')} style={{ width: 25, height: 25, marginTop: 5 }} />
  }
};

const TrafficStack = createStackNavigator(
  {
    Snow: TrafficScreen
  },
  navOps
);

TrafficStack.navigationOptions = {
  tabBarOptions: tabBarOps,
  tabBarIcon: () => {
    return <Image source={require('../assets/tab-navigator/icons/traffic.png')} style={{ width: 25, height: 25, marginTop: 5 }} />
  }
};

const AboutStack = createStackNavigator(
  {
    About: AboutScreen,
  },
  navOps
);


AboutStack.navigationOptions = {
  tabBarOptions: tabBarOps,
  tabBarIcon: () => {
    return <Image source={require('../assets/tab-navigator/icons/information.png')} style={{ width: 25, height: 25, marginTop: 5 }} />
  }
};

export default createMaterialTopTabNavigator(
  {
    Home: IntroStack,
    Weather: WeatherStack,
    POW: SnowStack,
    Traffic: TrafficStack,
    About: AboutStack,
  },
  {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: false,

  }

);
