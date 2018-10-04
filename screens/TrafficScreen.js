
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

import styles from './TrafficScreen.styles';

//const navigation = this.props.navigation;

const text = {
  'header': 'Traffic'
}

const parseTrafficInfo = (obj) => {
  // get the weekend traffic forecast. 
  const weekendTrafficInfo = obj.traffic.weekendTraffic;
  
  // we can just get the portion
  // of an array withing the object, which starts with 'TRAVEL FORECAST & TIPS'.
  // Just get the portion between 'WEEKEND TRAVEL FORECAST' and 'Have a great weekend!'.
  let start = weekendTrafficInfo.indexOf('WEEKEND TRAVEL FORECAST');
  let end = weekendTrafficInfo.indexOf('Have a great weekend!');
  let weekendDisplayData = weekendTrafficInfo.slice(start, end);

  return ({
    traffic: {
      weekend: weekendDisplayData
    }
  })
}

export default class SnowScreen extends Component {
  state = {

    traffic: {
      weekend: [] // leave empty until it is filled by the fetch in componentDidMount
    }

  }

  componentDidMount() {
    return fetch('https://lit-falls-35438.herokuapp.com/traffic')
      .then((response) => response.json())
      .then((response) => {

        let newState = parseTrafficInfo(response);
        console.log(`Parsed state: ${JSON.stringify(newState)}`);
        this.setState(newState);

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    const resizeMode = 'cover';
    const traffic = this.state.traffic;
    
    return (

      <View style={styles.container}>
        <ImageBackground
          style={{ flex: 1 }}
          opacity={1}
          imageStyle={{ resizeMode }}
          source={require('../assets/images/trafficbg.jpg')}
        >

          <View style={styles.contentContainer}>
            {/* <Image
              style={styles.iconImage}
              source={require('../assets/images/traffic.png')}
            ></Image> */}
            <View style={styles.textHolder}>
              {traffic.weekend.map( (p) => {
                return (
                  <Text style={styles.trafficDescriptionText}>{p}</Text>
                )
              })}
            </View>
          </View>

        </ImageBackground>

      </View>
    );
  }
}

//AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
