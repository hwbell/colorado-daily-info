
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  AppRegistry,
  PixelRatio,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import PoweredBy from '../components/PoweredBy';
import PageTitle from '../components/PageTitle'

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
  let forecastList = list.slice(0);

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
      tempHigh: Math.floor(day.temperatureHigh),
      tempLow: Math.floor(day.temperatureLow),
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
    this.renderWeatherSelectors = this.renderWeatherSelectors.bind(this);
    this.getCityWeather = this.getCityWeather.bind(this);
  }
  state = {
    availableCities: [
      {
        name: 'Denver',
        iconSrc: require('../assets/weather/icons/skyline.png')
      },
      {
        name: 'Silverthorne',
        iconSrc: require('../assets/tab-navigator/icons/mountains.png')
      }
    ],
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

    // console.log(city)
    // console.log(this.state.city)

    let cityToFetch = city.toLowerCase();
    return fetch(`https://lit-falls-35438.herokuapp.com/${cityToFetch}-weather`)
      .then((response) => response.json())
      .then((response) => {
        const todayWeather = response.data.currently;

        this.setState({
          city: city,
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
          this.renderWeatherSelectors();
        });

      })
      .catch((error) => {
        console.error(error);
      });


  }

  renderWeatherSelectors() {

    const buttonColor = 'rgba(215, 255, 255, 0.45)';
    const activeButtonColor = 'rgba(105, 105, 255, 0.45)';

    return (
      <View style={styles.topIconHolder}>

        <View style={styles.topTextHolder}>
          <Text style={styles.weatherTodayCityText}>{this.state.city}, CO</Text>

          <Text style={styles.weatherTodayTempText}>{this.state.currentTemp} &deg;F </Text>

          <Text style={styles.weatherTodayDescText}>{this.state.descr}</Text>
        </View>

        {
          this.state.availableCities.map((city, i) => {

            // color the button depending on which city is currently selected

            {/* console.log(city, this.state.city) */}
            let buttonStyle = {
              backgroundColor: this.state.city === city ? activeButtonColor : buttonColor,
              borderRadius: 20,
              padding: 10,
              marginTop: 15
            }

            return (
              <TouchableOpacity key={i} style={buttonStyle} onPress={() => { this.getCityWeather(city.name) }}>
                <Image
                  style={styles.topIconImage}
                  source={city.iconSrc}
                ></Image>
              </TouchableOpacity>
            )
          })
        }

      </View>
    )
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

          <PageTitle
            title='Weather'
            subtitle='know before you go'
          />

          {/* the buttons for changing locations along with the display of city name/ temp / short description */}
          {this.renderWeatherSelectors()}

          {/* the daily forecast scroller */}
          <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={true}>

            {condensedForecast ?
              condensedForecast.map((day, i) => {

                let iconSrc = getWeatherIcon(day.icon);

                return (
                  <View key={i} style={styles.forecastHolder}>

                    <View style={styles.textHolder}>
                      <Text style={styles.date}>{day.date}</Text>
                    </View>

                    <View style={styles.textHolder}>
                      <Text style={styles.tempHigh}>{day.tempHigh} &deg;F</Text>
                      <Text style={styles.tempLow}>{day.tempLow} &deg;F</Text>
                    </View>
                    
                    <View style={styles.summaryTextHolder}>
                      <Text style={styles.summary}>{day.desc}</Text>
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

const buttonColor = 'rgba(215, 255, 255, 0.45)';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 80, 255, 0.5)',
  },
  
  topTextHolder: {
    marginTop: 12,
    width: '45%'
  },
  weatherSelector: {
    backgroundColor: buttonColor,
    // borderColor: 'rgba(245, 245, 245, 0.4)',
    // borderWidth: 0.4,
    borderRadius: 20,
    padding: 10,
    marginTop: 15
  },
  topIconHolder: {
    width: '90%',
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  topIconImage: {
    width: 60,
    height: 60
  },
  iconImage: {
    // borderRadius: 10,
    // marginRight: 20,
    // marginTop: 8,
    width: 35,
    height: 35
  },
  weatherTodayCityText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Cabin',
  },
  weatherTodayDescText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Cabin',
  },
  weatherTodayTempText: {
    textAlign: 'center',

    color: 'white',
    fontSize: 34,
    fontFamily: 'Cabin-Bold',
  },

  // inside the scrollview
  forecastHolder: {
    flex: 1,
    padding: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 80, 255, 0.5)',
    borderColor: 'rgba(245, 245, 245, 0.4)',
    borderWidth: 0.5,
    // borderRadius: 20,
  },
  summaryTextHolder: {
    width: '45%',
    paddingLeft: 10,
  },
  textHolder: {
    width: '20%',
    paddingLeft: 10,
  },
  iconHolder: {
    width: '15%',
    textAlign: 'right'
  },
  summary: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Cabin',
  },
  date: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Cabin',
  },
  tempHigh: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Cabin',
  },
  tempLow: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Cabin',
  }
});


//AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
