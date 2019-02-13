import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';


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
    height: 50,
    backgroundColor: 'blue',
  },
  indicatorStyle: {
    backgroundColor: '#F2F3F4',
  },
  labelStyle: {
    fontSize: 12,
    fontFamily: 'Avenir-Roman',
    fontWeight: 'bold',
    width: 94,
    marginTop: 4
  },
  tabStyle: {
    width: 74,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -4,
  },
  showIcon: true,
}

const IntroStack = createStackNavigator(
  {
    Home: IntroScreen,
  },
  navOps
  );

IntroStack.navigationOptions = {
  showIcon: true, 
  tabBarLabel: 'Weather',
  tabBarOptions: tabBarOps,
  tabBarIcon : () => {
    return <Image source={require('../assets/images/icons/weather.png')} style={{width:30,height:30, marginTop:5}} />
  }
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
  tabBarOptions: tabBarOps,
  tabBarIcon : () => {
    return <Image source={require('../assets/images/icons/weather.png')} style={{width:30,height:30, marginTop:5}} />
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
  tabBarOptions: tabBarOps,
  tabBarIcon : () => {
    return <Image source={require('../assets/images/icons/snow.png')} style={{width:25,height:25, marginTop:5}} />
  }
};

const TrafficStack = createStackNavigator(
  {
    Snow: TrafficScreen
  },
  navOps
  );

TrafficStack.navigationOptions = {
  tabBarLabel: 'Traffic',
  tabBarOptions: tabBarOps,
  tabBarIcon : () => {
    return <Image source={require('../assets/images/icons/traffic.png')} style={{width:25,height:25, marginTop:5}} />
  }
};

const AboutStack = createStackNavigator(
  {
    About: AboutScreen,
  },
  navOps
  );


AboutStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarOptions: tabBarOps,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createMaterialTopTabNavigator (
  {
    Intro: IntroStack,
    Weather: WeatherStack,
    Snow: SnowStack,
    Traffic: TrafficStack,
    About: AboutStack,
  },
  {
    initialRouteName: 'Intro',
    tabBarPosition: 'bottom',
    swipeEnabled: true, 
    animationEnabled: true,
    lazy: false,
    
  }
  
);
