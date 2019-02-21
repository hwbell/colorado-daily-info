
import React, { Component } from 'react';
import {
  View,
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

    return (
      <View style={styles.container}>

        <View>
          <Text h1 style={styles.header}>
            Welcome
          </Text>
        </View>

        <View>
          <Text h4 style={styles.header}>
            A Denver skier's essential info
          </Text>
        </View>

        <View style={styles.buttonContainer}>

          <Button
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
          />

          <Button
            title="About this App"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            onPress={() => navigate('About')}
          />

        </View>
      </View>
    );
  }
}

