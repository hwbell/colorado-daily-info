
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

import Credits from '../components/Credits';

// console.log('credits: ')
// console.log(credits)
const tools = ['React Native', 'Expo CLI', 'create-react-native-app', 'Node.js', 'Puppeteer.js', 'MongoDB', 'Git', 'Heroku'];

const toolsDisplay = tools.map((tool, i) => {
  return (
    <TouchableOpacity key={i}>
      <Text style={styles.toolLink}>{tool}</Text>
    </TouchableOpacity>
  )
});

// const creditsDisplay = Object.keys(credits).map( (prop, i) => {
//   const html = credits[prop].replace(/div/g, 'View')
//   return (
//     <View key={i}>
//       <View>Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></View>
//     </View>
//   )
// });

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

    return (
      <ScrollView style={styles.container}>
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

        <Credits/>

      </ScrollView>
    );
  }
}

