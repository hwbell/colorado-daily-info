
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import { Button, Text } from 'react-native-elements';

import styles from './AboutScreen.styles';

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
        <Text style={styles.title}>
          About this App
        </Text>
        <Text style={styles.subtitle}>
          Colorado Daily Info
        </Text>
        <Text style={styles.author}>
          built by Harry Bell
        </Text>
        <Text style={styles.paragraph}>
          an app made with:
        </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>React-Native</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.linkText}>Expo cli</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.linkText}>create-react-native-app</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.linkText}>node js</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.linkText}>pupeteer js</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.linkText}>heroku</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

