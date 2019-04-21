
import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
  PixelRatio
} from 'react-native';

import { Text } from 'react-native-elements';

// the info for the buttons
const buttonsInfo = [
  {
    title: 'Weather',
    route: 'Weather'
  },
  {
    title: 'Snowfall',
    route: 'Snow'
  },
  {
    title: 'Traffic',
    route: 'Traffic'
  },
  // {
  //   title: 'About this App',
  //   route: 'About'
  // },
]

export default class IntroScreen extends Component {

  constructor(props) {
    super(props);

    this.renderButtons = this.renderButtons.bind(this);
  }
  state = {
    //
  }

  componentDidMount() {

  }

  // render them together with the provided info
  renderButtons(buttonArr, navigate) {

    const buttonContainerStyle = {
      paddingTop: 10,
      flex: 1,
    }

    return (
      <View style={styles.buttonContainer}>
        {
          buttonArr.map((button, i) => {
            return (
              <TouchableOpacity key={i} style={styles.fullWidthButton} onPress={() => navigate(button.route)}>
                <Text style={styles.buttonText}>{button.title}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>

    )
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

          <View style={styles.contentContainer}>
            <View>
              <Text style={styles.title}>
                Denver Mountain Daily
              </Text>
            </View>

            <View>
              <Text style={styles.subtitle}>
                Everything a local needs to know before heading to the mountains.
            </Text>
            </View>

            {this.renderButtons(buttonsInfo, navigate)}

          </View>

        </ImageBackground>

      </View>

    );
  }
}

const buttonColor = 'rgba(215, 255, 255, 0.45)'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 80, 255, 0.5)',
  },
  title: {
    fontSize: 14 * PixelRatio.get(),
    fontFamily: 'Cabin',
    color: 'white',
    marginTop: 50
  },
  subtitle: {
    fontSize: 10 * PixelRatio.get(),
    fontFamily: 'Cabin',
    color: 'white',
    margin: 30
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  fullWidthButton: {
    backgroundColor: buttonColor,
    borderColor: 'rgba(245, 245, 245, 0.4)',
    borderWidth: 0.4,
    borderRadius: 50,
    width: '75%',
    margin: 6
  },
  buttonText: {
    fontSize: 14 * PixelRatio.get(),
    padding: 20,
    fontFamily: 'Cabin',
    color: 'white',
    textAlign: 'center',

  }

});


