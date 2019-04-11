
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import { Text } from 'react-native-elements';

import Credits from '../components/Credits';

const tools = ['React Native', 'Expo CLI', 'create-react-native-app', 'Node.js', 'Puppeteer.js', 'MongoDB', 'Git', 'Heroku'];

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
        <ScrollView style={styles.container}>

          <View style={styles.contentContainer}>
            <Text style={styles.title}>
              About this App
          </Text>
            <Text style={styles.subtitle}>
              Colorado Daily Info
          </Text>
            <Text style={styles.createdBy}>
              built by Harry Bell
          </Text>
            <Text style={styles.paragraph}>
              an app made with:
          </Text>

            {toolsDisplay}

            <Credits />
          </View>

        </ScrollView>

        </ImageBackground>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 80, 255, 0.5)',
  },
  contentContainer: {
    // flex: 0, 
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: { 
    fontFamily: 'Cabin-Bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontWeight: '400',
    margin: 50,
  },
  subtitle: {
    fontFamily: 'Cabin',
    textAlign: 'left',
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 20
  },
  createdBy: {
    fontFamily: 'Cabin',
    textAlign: 'left',
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 30
  },

  paragraph: {
    fontFamily: 'Cabin',
    margin: 20,
    fontSize: 20,
    fontWeight: '400',
    color: 'white'
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
  toolLink: {
    fontFamily: 'Cabin',
    margin: 0,
    marginLeft: 35,
    fontSize: 20,
    fontWeight: '400',
    color: '#00FFFF'
  },
  linkText: {
    fontFamily: 'Cabin',
    margin: 5,
    fontSize: 12,
    fontWeight: '400',
    color: '#00FFFF'
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

const toolsDisplay = tools.map((tool, i) => {
  return (
    <TouchableOpacity style={styles.tool} key={i}>
      <Text style={styles.toolLink}>{tool}</Text>
    </TouchableOpacity>
  )
});


