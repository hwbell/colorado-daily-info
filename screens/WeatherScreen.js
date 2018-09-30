
import React, { Component } from 'react';
import {
  View,
  AppRegistry,
  Image,
  ImageBackground,
  Text,
  TouchableHighlight,
  Button
} from 'react-native';

import styles from './WeatherScreen.styles';

//const navigation = this.props.navigation;

const text = {
  'header': 'Weather'
}

//get weather from server
const weatherData = fetch("https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID&APPID=eef8b0df2136b2a17532672c7ac59717")
.then(function(response) {
  return response.json();
});

const todayWeather = weatherData.list[0];

export default class WeatherScreen extends Component {
  
  
  render() {
    const resizeMode = 'cover';

    return (

      <View style={styles.container}>
        <ImageBackground
          style={{flex: 1}}
          opacity={0.75}
          imageStyle={{resizeMode: 'stretch'}}
          source={ require('../assets/images/denver.jpg') }
        >
        
        <Text style={styles.weatherCityText}>
          {`${weatherData.city.name}, ${weatherData.city.country}`}
        </Text>

        <Text style={styles.weatherTempText}></Text>

        <Text style={styles.weatherDescriptionText}></Text>

        </ImageBackground>
        
      </View>
    );
  }
}

//AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
