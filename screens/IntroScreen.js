
import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  // Text,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';

import { Button, Text } from 'react-native-elements';

import styles from './IntroScreen.styles';

export default class WeatherScreen extends Component {

  constructor(props) {
    super(props);
  }
  state = {
    //
  }

  componentDidMount() {

  }

  render() {
    const { navigate } = this.props.navigation;
    const resizeMode = 'cover';
    return (

      <View style={styles.container}>
        <ImageBackground
          style={{ flex: 1 }}
          opacity={1}
          imageStyle={{ resizeMode }}
          source={require('../assets/weather/backgrounds/night/clear-night-home.png')}
        >

        <View style={styles.container}>
          <View>
            <Text style={styles.title}>
              Colorado Daily Info
            </Text>
          </View>

          <View>
            <Text style={styles.subtitle}>
              Everything a Denver skier needs to know before heading to the mountains.
            </Text>
          </View>

          <View style={styles.buttonContainer}>

            <View style={styles.inputsContainer}>
              <TouchableOpacity style={styles.fullWidthButton} onPress={() => navigate('Weather')}>
                <Text style={styles.fullWidthButtonText}>Check the weather</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputsContainer}>
              <TouchableOpacity style={styles.fullWidthButton} onPress={() => navigate('Snow')}>
                <Text style={styles.fullWidthButtonText}>Recent snowfall</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputsContainer}>
              <TouchableOpacity style={styles.fullWidthButton} onPress={() => navigate('Traffic')}>
                <Text style={styles.fullWidthButtonText}>Traffic this weekend</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputsContainer}>
              <TouchableOpacity style={styles.fullWidthButton} onPress={() => navigate('About')}>
                <Text style={styles.fullWidthButtonText}>About this app</Text>
              </TouchableOpacity>
            </View>

            {/* <Button
            title="Weather"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            onPress={() => navigate('Weather')}
          />
          <Button
            title="Snow Conditions"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            onPress={() => navigate('Snow')}
          />
          <Button
            title="Traffic"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            onPress={() => navigate('Traffic')}
          /> */}

            {/* <Button
            title="About this App"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            onPress={() => navigate('About')}
          /> */}

          </View>

        </View>
          
        </ImageBackground>

      </View>



      
    );
  }
}

