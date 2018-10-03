
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

import styles from './SnowScreen.styles';

//const navigation = this.props.navigation;

const text = {
  'header': 'Weather'
}

const parseResortInfo = (obj) => {

  const aBasinInfo = obj.aBasinWeather.aBasinToday;
  const keystoneInfo = obj.keystoneWeather.keystoneToday;
  console.log(`aBasinInfo: ${aBasinInfo[0]}`)

  return ({
    aBasin: {
      pastDaySnow: aBasinInfo[0],
      threeDaySnow: aBasinInfo[2],
      baseSnow: aBasinInfo[4],
      snowConditions: aBasinInfo[6],
      todayTemp: aBasinInfo[10],
      tomorrowTemp: aBasinInfo[14],
      twoDayTemp: aBasinInfo[18],
    },
    keystone: {
      currentTemp: keystoneInfo[0],
      currentDesc: keystoneInfo[1],
      highTemp: keystoneInfo[2],
      lowTemp: keystoneInfo[4],
      weatherDesc: keystoneInfo[6],
    }
  })
}

export default class SnowScreen extends Component {
  state = {

    aBasin: {
      pastDaySnow: '',
      threeDaySnow: '',
      baseSnow: '',
      snowConditions: '',
      todayTemp: '',
      tomorrowTemp: '',
      twoDayTemp: '',
    },

    keystone: {
      currentTemp: '',
      currentDesc: '',
      highTemp: '',
      lowTemp: '',
      weatherDesc: '',
    }

  }

  componentDidMount() {
    return fetch('https://lit-falls-35438.herokuapp.com/snow')
      .then((response) => response.json())
      .then((response) => {

        let newState = parseResortInfo(response);
        console.log(`Parsed state: ${JSON.stringify(newState)}`);
        this.setState(newState);

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const resizeMode = 'cover';
    const aBasin = this.state.aBasin;
    const keyston = this.state.keystone;
    console.log(`aBasin.pastDaySnow:  ${this.state.aBasin}`)
    //console.log(this.state)
    return (

      <View style={styles.container}>
        <ImageBackground
          style={{ flex: 1 }}
          opacity={1}
          imageStyle={{ resizeMode }}
          source={require('../assets/images/snowbg.png')}
        >
          <Text style={styles.weatherCityText}>{`past 24 hrs: ${aBasin.pastDaySnow}`}</Text>
          <Text style={styles.weatherDescriptionText}>{`past 3 days: ${aBasin.threeDaySnow}`}</Text>
          <Text style={styles.weatherDescriptionText}>{`base: ${aBasin.baseSnow}`}</Text>

        </ImageBackground>

      </View>
    );
  }
}

//AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
