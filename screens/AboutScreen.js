
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  PixelRatio
} from 'react-native';

import { Text } from 'react-native-elements';

import PageTitle from '../components/PageTitle';
import Credits from '../components/Credits';
import LinksList from '../components/LinksList';

const tools = [
  // 'React Native', 'Expo CLI', 'Node.js', 'Express.js', 'Puppeteer.js', 'MongoDB', 'Git', 'Heroku'
  {
    name: 'React Native',
    src: 'https://facebook.github.io/react-native/'
  },
  {
    name: 'Node.js',
    src: 'https://nodejs.org/en/'
  },

  {
    name: 'Express.js',
    src: 'https://expressjs.com/'
  },
  {
    name: 'Puppeteer.js',
    src: 'https://developers.google.com/web/tools/puppeteer/'
  },
  {
    name: 'MongoDB',
    src: 'https://www.mongodb.com/'
  },
  {
    name: 'Github',
    src: 'https://github.com/'
  },
  {
    name: 'Heroku',
    src: 'https://heroku.com/'
  },
  {
    name: 'React Native',
    src: 'https://facebook.github.io/react-native/'
  },
];

export default class AboutScreen extends Component {

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

          <View style={styles.contentContainer}>
            <PageTitle
              title='About this App'
              subtitle='built by Harold Bell'
            />

            <ScrollView style={styles.scrollContainer}>

              <View style={styles.contentContainer}>

                <Text style={styles.appName}>
                  Denver Mountain Daily
                </Text>

                <Text style={styles.createdBy}>
                  an app made with:
                </Text>

                <LinksList
                  links={tools}
                  handleLink={this.handleLink}
                />

                <Credits />
              </View>

            </ScrollView>

          </View>

        </ImageBackground>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    backgroundColor: 'rgba(0, 80, 255, 0.5)',
  },
  scrollContainer: {
    width: '100%'
  },

  appName: {
    fontFamily: 'Cabin',
    textAlign: 'left',
    color: 'white',
    fontSize: 12 * PixelRatio.get(),
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 30
  },

  createdBy: {
    fontFamily: 'Cabin',
    textAlign: 'left',
    color: 'white',
    fontSize: 10 * PixelRatio.get(),
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 36
  },


  creditsContainer: {
    // width: '100%',
  },
  credit: {
    fontFamily: 'Cabin',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  authorCreditText: {
    fontFamily: 'Cabin',
    textAlign: 'left',
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
    margin: 5,
  },

});



