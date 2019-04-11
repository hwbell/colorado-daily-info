
import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import { Text } from 'react-native-elements';

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
          </View>

        </View>
          
        </ImageBackground>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 80, 255, 0.5)',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Cabin',
    color: 'white',
    marginTop: 50
  },
  subtitle: {
    fontSize: 22,
    fontFamily: 'Cabin',
    color: 'white',
    margin: 30
  },
  buttonContainer: {
    paddingTop: 10,
    flex: 1,
  },

  inputsContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 0
  },
  fullWidthButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(245, 245, 245, 0.4)',
    borderWidth: 0.4,
    borderRadius: 20,
    height: '90%',
    width: '100%',
    margin: 0
  },
  fullWidthButtonText: {
    fontSize: 20,
    padding: 28,
    fontFamily: 'Cabin',
    color: 'white',
    textAlign: 'center',

  }

});


