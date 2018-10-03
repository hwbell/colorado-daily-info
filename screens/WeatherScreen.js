
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

const convertTemp = (kelvin) => {
  var farenheit = kelvin*9/5 - 459.67;
  return Math.floor(farenheit);
}

export default class WeatherScreen extends Component {
  state = {
    city: '',
    country: '',
    weather: '',
    currentTemp: '',
    highTemp: '',
    lowTemp: '',
    descr: '',
    humidity: '',
    windSpeed: '',
    windDir: '',
  }

  componentDidMount() {
    return fetch('https://lit-falls-35438.herokuapp.com/weather')
      .then((response) => response.json())
      .then((response) => {
        const fullWeather = response;
        const todayWeather = response.list[0];
        console.log(fullWeather);
        this.setState({
          city: fullWeather.city.name,
          country: fullWeather.city.country,
          todayWeather: todayWeather,
          currentTemp: convertTemp(todayWeather.main.temp),
          highTemp: todayWeather.main.temp_max,
          lowTemp: todayWeather.main.temp_min,
          descr: todayWeather.weather[0].description,
          humidity: todayWeather.main.humidity,
          windSpeed: todayWeather.wind.speed,
          windDir: todayWeather.wind.deg,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const resizeMode = 'cover';
    //console.log(this.state)
    return (

      <View style={styles.container}>
        <ImageBackground
          style={{ flex: 1 }}
          opacity={1}
          imageStyle={{ resizeMode: 'stretch' }}
          source={require('../assets/images/rain.jpg')}
        >

          <Text style={styles.weatherCityText}>{this.state.city}, {this.state.country}</Text>

          <Text style={styles.weatherTempText}>{this.state.currentTemp} F </Text>

          <Text style={styles.weatherDescriptionText}>{this.state.descr}</Text>

        </ImageBackground>

      </View>
    );
  }
}

//AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
