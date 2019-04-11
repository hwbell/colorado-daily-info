
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  AppRegistry,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet
} from 'react-native';

import PoweredBy from '../components/PoweredBy';


//const navigation = this.props.navigation;

const text = {
  'header': 'Weather'
}

// icon options from the dark sky api:
//  clear-day, clear-night, rain, snow, sleet, 
//  wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night

// assign icons to the 
const weatherImagesList = {
  'clear-day': {
    bg: require('../assets/weather/backgrounds/day/clear-day.png'),
    icon: require('../assets/weather/icons/day/clear-day.png'),
    descr: 'clear sky',
  },
  'clear-night': {
    bg: require('../assets/weather/backgrounds/night/clear-night.png'),
    icon: require('../assets/weather/icons/night/clear-night.png'),
    descr: 'clear sky',
  },
  'partly-cloudy-day': {
    bg: require('../assets/weather/backgrounds/day/few-clouds-day.jpg'),
    icon: require('../assets/weather/icons/day/few-clouds-day.png'),
    descr: 'scattered clouds',
  },
  'partly-cloudy-night': {
    bg: require('../assets/weather/backgrounds/night/few-clouds-night.png'),
    icon: require('../assets/weather/icons/night/few-clouds-night.png'),
    descr: 'scattered clouds',
  },
  'cloudy': {
    bg: require('../assets/weather/backgrounds/day/few-clouds-day.jpg'),
    icon: require('../assets/weather/icons/day/few-clouds-day.png'),
    descr: 'broken clouds',
  },
  'fog': {
    bg: require('../assets/weather/backgrounds/mist.jpg'),
    icon: require('../assets/weather/icons/mist.png'),
    descr: 'fog',
  },
  'rain': {
    bg: require('../assets/weather/backgrounds/day/rain-day.jpg'),
    icon: require('../assets/weather/icons/rain.png'),
    descr: 'shower rain',
  },
  'wind': {
    bg: require('../assets/weather/backgrounds/night/rain-night.jpg'),
    icon: require('../assets/weather/icons/wind.png'),
    descr: 'rain',
  },
  'rain': {
    bg: require('../assets/weather/backgrounds/thunderstorm.jpg'),
    icon: require('../assets/weather/icons/thunderstorm.png'),
    descr: 'thunderstorm',
  },
  'snow': {
    bg: require('../assets/weather/backgrounds/day/snow-day.png'),
    icon: require('../assets/weather/icons/snow.png'),
    descr: 'snow',
  },

}

// makeForeCastList() sorts list into day separated format, and
// extracts one daily time point from the forecast, for the 
// forecast display

const makeForeCastList = (list) => {

  // Dark Sky API makes this a lot more convenient (and accurate!) than open weather map.
  let forecastList = list.slice(1, list.length); // toss the 1st day, we have that from response.currently (see below)

  let condensedList = []; // we'll make a simple array for the days forecasted
  forecastList.forEach((day) => {
    // get the date from the provided unix time 
    const time = new Date(day.time * 1000);

    let year = time.getFullYear().toString().slice(0, 2);
    let date = time.getDate();
    let month = time.getMonth();

    let hour = time.getHours(); // not using these atm
    let minutes = time.getMinutes();

    condensedList.push({
      desc: day.summary,
      icon: day.icon,
      tempHigh: day.temperatureHigh,
      tempLow: day.temperatureLow,
      date: `${month + 1}-${date}` // need to correct for the api's month array
    });

  });

  return condensedList;
}


const convertTemp = (kelvin) => {
  var farenheit = kelvin * 9 / 5 - 459.67;
  return Math.floor(farenheit);
}

const getWeatherBackground = (id) => {
  // console.log(id);
  return weatherImagesList[id].bg;
}

const getWeatherIcon = (id) => {
  // console.log(id);
  return weatherImagesList[id].icon;
}

export default class WeatherScreen extends Component {

  constructor(props) {
    super(props);
    this.getCityWeather = this.getCityWeather.bind(this);
  }
  state = {
    city: '',
    country: '',
    todayWeather: '',
    currentTemp: '',
    highTemp: '',
    lowTemp: '',
    descr: '',
    humidity: '',
    windSpeed: '',
    windDir: '',
    forecast: [],
    icon: '',
    background: '',
  }

  componentDidMount() {
    this.getCityWeather('Denver');
  }

  getCityWeather(city) {
    let cityToFetch = city.toLowerCase();
    return fetch(`https://lit-falls-35438.herokuapp.com/${cityToFetch}-weather`)
      .then((response) => response.json())
      .then((response) => {
        const todayWeather = response.data.currently;

        this.setState({
          city: `${city}`,
          currentTemp: Math.floor(todayWeather.temperature),
          highTemp: response.data.daily.data[0].temperatureHigh, // currently doesn't have high/low
          lowTemp: response.data.daily.data[0].temperatureLow, // '' '' 
          descr: todayWeather.summary,
          iconId: todayWeather.icon,
          backgroundId: todayWeather.icon,
          humidity: todayWeather.humidity,
          windSpeed: todayWeather.windSpeed,
          windDir: todayWeather.windBearing,
          weekSummary: response.data.daily.summary,
          forecast: makeForeCastList(response.data.daily.data),
        }, function () {
          // console.log(`this.state.backgroundId: ${this.state.backgroundId}`)
        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const resizeMode = 'cover';
    const condensedForecast = this.state.forecast;
    const backgroundId = this.state.backgroundId;

    const weatherBG = backgroundId ? getWeatherBackground(backgroundId) : getWeatherBackground('partly-cloudy-day');

    return (



      <ImageBackground
        style={{ flex: 1 }}
        opacity={1}
        imageStyle={{ resizeMode: 'cover' }}
        source={weatherBG}
      >
        <View style={styles.container}>

          <View style={styles.largeTextHolder}>
            <Text style={styles.weatherTodayCityText}>{this.state.city}, CO</Text>

            <Text style={styles.weatherTodayTempText}>{this.state.currentTemp} &deg;F </Text>

            <Text style={styles.weatherTodayDescText}>{this.state.descr}</Text>
          </View>

          <View style={styles.topIconHolder}>

            <View style={styles.weatherSelector}>
              <TouchableOpacity style={{ padding: 10 }} onPress={() => { this.getCityWeather('Denver') }}>
                <Image
                  style={styles.topIconImage}
                  source={require('../assets/weather/icons/skyline.png')}
                ></Image>
              </TouchableOpacity>
            </View>

            <View style={styles.weatherSelector}>
              <TouchableOpacity style={{ padding: 10 }} onPress={() => { this.getCityWeather('Silverthorne') }}>
                <Image
                  style={styles.topIconImage}
                  source={require('../assets/tab-navigator/icons/mountains.png')}
                ></Image>
              </TouchableOpacity>
            </View>

          </View>

          <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={true}>

            {condensedForecast ?
              condensedForecast.map((day, i) => {

                let iconSrc = getWeatherIcon(day.icon);

                return (
                  <View key={i} style={styles.contentContainer}>

                    <View style={styles.textHolder}>
                      <Text style={styles.weatherForecastDescText}>{day.date}</Text>
                      <Text style={styles.weatherForecastDescText}>{day.desc}</Text>
                    </View>
                    <View style={styles.textHolder}>
                      <Text style={styles.weatherForecastTempText}>{day.tempHigh} &deg;F</Text>
                      <Text style={styles.weatherForecastTempText}>{day.tempLow} &deg;F</Text>
                    </View>
                    <View style={styles.iconHolder}>
                      <Image
                        style={styles.iconImage}
                        source={iconSrc}
                      ></Image>
                    </View>

                  </View>
                )
              })
              : null
            }


          </ScrollView>
          <PoweredBy
            source={['https://darksky.net/dev']}
            name={[' DarkSky API']}
          />
        </View>
      </ImageBackground>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: 'rgba(0, 80, 255, 0.5)',
  },
  scrollContainer: {
    // flex: 1
  },  
  largeTextHolder: {
    // backgroundColor: 'rgba(0, 80, 255, 0.5)',
  },
  contentContainer: {
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 80, 255, 0.5)',
    borderColor: 'rgba(245, 245, 245, 0.4)',
    borderWidth: 0.5,
    // borderRadius: 20,
  },
  topIconHolder: {
    // backgroundColor: 'rgba(0, 80, 255, 0.5)',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',

    // margin: 30
  },
  topIconImage: {
    width: 65,
    height: 65
  },

  textHolder: {
    // paddingTop: 10,
    paddingLeft: 20,
    width: '40%',
  },

  iconHolder: {
    width: '20%',
  },
  iconImage: {
    borderRadius: 10,
    marginRight: 20,
    // marginTop: 8,
    width: 45,
    height: 45
  },
  weatherTodayCityText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontFamily: 'Cabin',
    marginTop: 30,
    marginBottom: 10,
  },
  weatherTodayDescText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    fontFamily: 'Cabin',
  },
  weatherTodayTempText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 36,
    fontFamily: 'Cabin-Bold',
  },

  weatherSelector: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(245, 245, 245, 0.4)',
    borderWidth: 0.4,
    borderRadius: 20,
  },

  weatherForecastDescText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Cabin',
  },
  weatherForecastTempText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Cabin',
  }
});


//AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
