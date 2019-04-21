
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Text,
  PixelRatio
} from 'react-native';

import PoweredBy from '../components/PoweredBy';
import PageTitle from '../components/PageTitle';

const parseTrafficInfo = (obj) => {
  // get the weekend traffic forecast. 
  const weekendTrafficInfo = obj.traffic.weekendTraffic;

  // we can just get the portion
  // of an array within the object, which starts with 'TRAVEL FORECAST & TIPS'.
  // Just get the portion between 'WEEKEND TRAVEL FORECAST' and 'Have a great weekend!'.
  let start = weekendTrafficInfo.indexOf('WEEKEND TRAVEL FORECAST');
  let end = weekendTrafficInfo.indexOf('TIPS FOR I-70 MOUNTAIN TRAVEL');
  let weekendDisplayData = weekendTrafficInfo.slice(start, end - 1);

  // it comes in all caps so correct this.
  weekendDisplayData[0] = weekendDisplayData[0][0] + weekendDisplayData[0].slice(1).toLowerCase();
  weekendDisplayData[1] = weekendDisplayData[1][1] + weekendDisplayData[1].slice(2).toLowerCase();

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
        // console.log(`Parsed state: ${JSON.stringify(newState)}`);
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


      <ImageBackground
        style={{ flex: 1 }}
        opacity={1}
        imageStyle={{ resizeMode }}
        source={require('../assets/traffic/backgrounds/traffic.png')}
      >

        <View style={styles.container}>

          <PageTitle 
            title='Weekend Traffic Forecast'
            subtitle={traffic.weekend[1]}
          />

          <ScrollView style={styles.scrollContainer}>
            <View style={styles.contentContainer}>
              
              <View style={styles.textHolder}>
                {traffic.weekend.map((p, i) => {
                  return (
                    i > 1 && <Text key={i} style={styles.trafficDescriptionText}>{p}</Text>
                  )
                })}
              </View>
            </View>



          </ScrollView>

          <PoweredBy
            source={['https://www.goi70.com']}
            name={[' GO-I70']}
          />
        </View>

      </ImageBackground>


    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 80, 255, 0.5)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    // width: '100%'
  },
  textHolder: {
    // marginTop: 18,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center'
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
    margin: 18
  },
  contentContainer: {
    // marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0.2)',
    // borderColor: 'rgba(245, 245, 245, 0.4)',
    // borderWidth: 0.5,
    borderRadius: 15,
  },
  iconImage: {
    borderRadius: 10,
    margin: 20,
    width: 80,
    height: 80,

  },
  trafficDescriptionText: {
    textAlign: 'left',
    marginTop: 0,
    marginBottom: 0,
    color: 'white',
    fontSize: 18,
    fontFamily: 'Cabin',
  },


});


//AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
