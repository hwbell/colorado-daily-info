
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  StyleSheet
} from 'react-native';

import { LinearGradient } from 'expo'
import PoweredBy from '../components/PoweredBy';
import PageTitle from '../components/PageTitle';

// get the data into simple pieces from the fetched JSON
const parseResortInfo = (obj) => {

  const aBasinInfo = obj.aBasinWeather.aBasinToday;
  // const keystoneInfo = obj.keystoneWeather.keystoneToday;
  const openSnowInfo = obj.openSnowOutlook.openSnowToday;
  //console.log(`aBasinInfo: ${aBasinInfo[0]}`)

  return ({
    aBasin: {
      pastDaySnow: aBasinInfo[0],
      threeDaySnow: aBasinInfo[2],
      baseSnow: aBasinInfo[4],
      snowConditions: aBasinInfo[6],
      // todayTemp: aBasinInfo[10],
      // todayWeather: aBasinInfo[11],
      // tomorrowTemp: aBasinInfo[14],
      // tomorrowWeather: aBasinInfo[15],
    },
    // keystone: {
    //   pastDaySnow: keystoneInfo[5],
    //   twoDaySnow: keystoneInfo[8],
    //   sevenDaySnow: keystoneInfo[11],
    //   baseSnow: keystoneInfo[14],
    //   snowConditions: keystoneInfo[0],
    // },
    openSnow: {
      summary: openSnowInfo[2],
    }
  })
}

export default class SnowScreen extends Component {
  state = {

    aBasin: {
      pastDaySnow: '',
      threeDaySnow: '',
      baseSnow: '',
      snowConditions: '',
      todayTemp: '',
      tomorrowTemp: '',
      twoDayTemp: '',
    },

    keystone: {
      currentTemp: '',
      currentDesc: '',
      highTemp: '',
      lowTemp: '',
      weatherDesc: '',
    },
    openSnow: {
      summary: ''
    }

  }

  componentDidMount() {
    return fetch('https://lit-falls-35438.herokuapp.com/snow')
      .then((response) => response.json())
      .then((response) => {

        let newState = parseResortInfo(response);
        // console.log(`Parsed state: ${JSON.stringify(newState)}`);
        this.setState(newState);

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    const resizeMode = 'cover';
    const aBasin = this.state.aBasin;
    // const keystone = this.state.keystone;
    const openSnow = this.state.openSnow;
    console.log(`aBasin.pastDaySnow:  ${this.state.aBasin}`)
    //console.log(this.state)
    return (


      <ImageBackground
        style={{ flex: 1 }}
        opacity={1}
        imageStyle={{ resizeMode }}
        source={require('../assets/weather/backgrounds/snow.jpg')}
      >

        <View style={styles.container}>

          <PageTitle 
            title='Recent Snowfall'
            subtitle='seek the pow...'
          />
          
          <ScrollView style={styles.scrollContainer}>


            <View style={styles.topInfoHolder}>
              <View style={styles.contentContainer}>
                <Image
                  style={styles.iconImage}
                  source={require('../assets/images/icons/abasin.png')}
                ></Image>
                <View style={styles.smallTextHolder}>
                  <Text style={styles.numbersText}>{`${aBasin.snowConditions}`}</Text>
                  <Text style={styles.numbersText}>{`base: ${aBasin.baseSnow}`}</Text>
                  <Text style={styles.numbersText}>{`24 hr: ${aBasin.pastDaySnow}`}</Text>
                  <Text style={styles.numbersText}>{`72: ${aBasin.threeDaySnow}`}</Text>

                </View>
              </View>

              {/* <View style={styles.contentContainer}>
                <Image
                  style={styles.iconImage}
                  source={require('../assets/images/icons/keystone.png')}
                ></Image>
                <View style={styles.smallTextHolder}>
                  <Text style={styles.numbersText}>{`${keystone.snowConditions}`}</Text>
                  <Text style={styles.numbersText}>{`base: ${keystone.baseSnow}`}</Text>
                  <Text style={styles.numbersText}>{`24 hr: ${keystone.pastDaySnow}`}</Text>
                  <Text style={styles.numbersText}>{`48 hr: ${keystone.twoDaySnow}`}</Text>
                  <Text style={styles.numbersText}>{`7 days: ${keystone.sevenDaySnow}`}</Text>
                </View>
              </View> */}
            </View>

            <View style={styles.summaryTextHolder}>
              <Text style={styles.descriptionText}>{`${openSnow.summary}`}</Text>
            </View>



          </ScrollView>

          <PoweredBy
            source={['https://www.arapahoebasin.com/', 'https://www.keystoneresort.com/', 'https://opensnow.com/']}
            name={['A-Basin', 'Keystone', 'Open Snow']}
          />

        </View>

      </ImageBackground>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    backgroundColor: 'rgba(0, 80, 255, 0.5)'
  },
  scrollContainer: {
    alignSelf: 'flex-end'
  },
  topInfoHolder: {
    marginTop: 25
  },

  contentContainer: {
    // flex: 0, 
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconImage: {
    borderRadius: 10,
    margin: 24,
    width: 80,
    height: 80,

  },
  smallTextHolder: {
    // marginTop: 14,
    // width: 250
  },
  summaryTextHolder: {
    justifyContent: 'center',
    margin: 18,
    // backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20,
  },
  numbersText: {
    textAlign: 'left',
    marginTop: 0,
    marginBottom: 0,
    color: 'white',
    fontSize: 18,
    fontFamily: 'Cabin',
  },
  descriptionText: {
    padding: 10,
    // paddingLeft: 20,
    textAlign: 'left',
    marginTop: 0,
    marginBottom: 0,
    color: 'white',
    fontSize: 18,
    fontFamily: 'Cabin',
  },

});

