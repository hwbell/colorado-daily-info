
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  AppRegistry,
  Image,
  ImageBackground,
  Text,
  TouchableHighlight,
  Button,
  StyleSheet
} from 'react-native';

import styles from './WeatherScreen.styles';

import { BlurView } from 'expo';

const uri = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';

//const navigation = this.props.navigation;

const text = {
  'header': 'Weather'
}

// get bg and icon from custom made list instead of openWeatherMap's built in
// icons since they aren't very good. also they don't have backgrounds.
const weatherImagesList = {
  '01d': {
    bg: require('../assets/weather/backgrounds/day/clear-day.png'),
    icon: require('../assets/weather/icons/day/clear-day.png'),
    descr: 'clear sky',
  },
  '01n': {
    bg: require('../assets/weather/backgrounds/night/clear-night.png'),
    icon: require('../assets/weather/icons/night/clear-night.png'),
    descr: 'clear sky',
  },
  '02d': {
    bg: require('../assets/weather/backgrounds/day/few-clouds-day.jpg'),
    icon: require('../assets/weather/icons/day/few-clouds-day.png'),
    descr: 'few clouds',
  },
  '02n': {
    bg: require('../assets/weather/backgrounds/night/few-clouds-night.png'),
    icon: require('../assets/weather/icons/night/few-clouds-night.png'),
    descr: 'few clouds',
  },
  '03d': {
    bg: require('../assets/weather/backgrounds/day/few-clouds-day.jpg'),
    icon: require('../assets/weather/icons/day/few-clouds-day.png'),
    descr: 'scattered clouds',
  },
  '03n': {
    bg: require('../assets/weather/backgrounds/night/few-clouds-night.png'),
    icon: require('../assets/weather/icons/night/few-clouds-night.png'),
    descr: 'scattered clouds',
  },
  '04d': {
    bg: require('../assets/weather/backgrounds/day/few-clouds-day.jpg'),
    icon: require('../assets/weather/icons/day/broken-clouds-day.png'),
    descr: 'broken clouds',
  },
  '04n': {
    bg: require('../assets/weather/backgrounds/night/few-clouds-night.png'),
    icon: require('../assets/weather/icons/night/broken-clouds-night.png'),
    descr: 'broken clouds',
  },
  '09d': {
    bg: require('../assets/weather/backgrounds/day/rain-day.jpg'),
    icon: require('../assets/weather/icons/rain.png'),
    descr: 'shower rain',
  },
  '09n': {
    bg: require('../assets/weather/backgrounds/night/rain-night.jpg'),
    icon: require('../assets/weather/icons/rain.png'),
    descr: 'broken clouds',
  },
  '10d': {
    bg: require('../assets/weather/backgrounds/day/rain-day.jpg'),
    icon: require('../assets/weather/icons/rain.png'),
    descr: 'rain',
  },
  '10n': {
    bg: require('../assets/weather/backgrounds/night/rain-night.jpg'),
    icon: require('../assets/weather/icons/rain.png'),
    descr: 'rain',
  },
  '11d': {
    bg: require('../assets/weather/backgrounds/thunderstorm.jpg'),
    icon: require('../assets/weather/icons/thunderstorm.png'),
    descr: 'thunderstorm',
  },
  '11n': {
    bg: require('../assets/weather/backgrounds/thunderstorm.jpg'),
    icon: require('../assets/weather/icons/thunderstorm.png'),
    descr: 'thunderstorm',
  },
  '13d': {
    bg: require('../assets/weather/backgrounds/day/snow-day.png'),
    icon: require('../assets/weather/icons/snow.png'),
    descr: 'snow',
  },
  '13n': {
    bg: require('../assets/weather/backgrounds/night/snow-night.png'),
    icon: require('../assets/weather/icons/snow.png'),
    descr: 'snow',
  },
  // '50d': {
  //   bg: require('../assets/weather/backgrounds/mist.jpg)'),
  //   icon: '../assets/weather/icons/mist.jpg',
  //   descr: 'mist',
  // },
  // '50n': {
  //   bg: require('../assets/weather/backgrounds/mist.jpg'),
  //   icon: '../assets/weather/icons/mist.jpg',
  //   descr: 'mist',
  // },

}

// makeForeCastList() sorts list into day separated format, and
// extracts one daily time point from the forecast, for the 
// forecast display

const makeForeCastList = (list) => {

  // this array will hold an array for each day in the forecast. 
  // 5 days right now
  let daySeparatedList = [];

  // we will separate each day's info into an array. initialize 
  // the first one here.
  let todaysList = [];

  // Ex would be "2018-09-26 03:00:00" for the first date. 
  // This will be the first query to make the first array.
  // We will change the filter query below as the day changes
  // make a new array each time.

  //console.log(list)
  let queryStr = list[0].dt_txt.slice(0,10);

  for ( let i=1; i<list.length; i++) {

    let thisDateStr = list[i].dt_txt.slice(0,10);
    //console.log(`thisDateStr: ${thisDateStr}`)
    
    if (thisDateStr === queryStr) {
      //console.log("match!");
      // add to this day's array
      todaysList.push(list[i]);

    } else {
      // append to the master array
      daySeparatedList.push(todaysList);
      // start over with the new date
      todaysList = [list[i]];
      queryStr = list[i].dt_txt.slice(0,10);
    }
  }

  // grab one timepoint per day for display. Using between 13 - 15 hr
  // for afternoon timepoint. Will use all timepoints when clicking on 
  // individual day
  let condensedList = []
  daySeparatedList.forEach((day) => {
    day.forEach((obj) => {
      
      let time = obj.dt_txt.slice(11,13);
      //console.log(time)
      if (time > 12 && time < 16) {
        // console.log('found afternoon timepoint')
        // console.log({
        //   desc: obj.weather[0].description,
        //   icon: obj.weather[0].icon
        // })
        condensedList.push({
          desc: obj.weather[0].description,
          icon: obj.weather[0].icon,
          temp: convertTemp(obj.main.temp),
          date: obj.dt_txt.slice(5,10)
        });
      }
    });
  });

  return [daySeparatedList, condensedList];
}


const convertTemp = (kelvin) => {
  var farenheit = kelvin*9/5 - 459.67;
  return Math.floor(farenheit);
}

const getWeatherBackground = (id) => {
  console.log(id);
  return weatherImagesList[id].bg;
}

const getWeatherIcon = (id) => {
  console.log(id);
  return weatherImagesList[id].icon;
}

export default class WeatherScreen extends Component {
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
    return fetch('https://lit-falls-35438.herokuapp.com/weather')
      .then((response) => response.json())
      .then((response) => {
        const todayWeather = response.list[0];
        //console.log(weatherImagesList[todayWeather.weather[0].icon]);
        
        this.setState({
          city: response.city.name,
          country: response.city.country,
          todayWeather: todayWeather,
          forecast: makeForeCastList(response.list),
          currentTemp: convertTemp(todayWeather.main.temp),
          highTemp: todayWeather.main.temp_max,
          lowTemp: todayWeather.main.temp_min,
          descr: todayWeather.weather[0].description,
          iconId: todayWeather.weather[0].icon,  
          backgroundId: todayWeather.weather[0].icon,
          humidity: todayWeather.main.humidity,
          windSpeed: todayWeather.wind.speed,
          windDir: todayWeather.wind.deg,
        }, function () {
          console.log(`this.state.backgroundId: ${this.state.backgroundId}`)
        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const resizeMode = 'cover';
    const condensedForecast = this.state.forecast[1];
    const backgroundId = this.state.backgroundId;

    const weatherBG = backgroundId ? getWeatherBackground(backgroundId) : getWeatherBackground('01d');

    return (

      <View style={styles.container}>
        
        <ImageBackground
          style={{ flex: 1 }}
          opacity={1}
          imageStyle={{ resizeMode: 'cover'}}
          source={weatherBG}
        >
        <ScrollView style={styles.container}>
          <View style={styles.largeTextHolder}>
            <Text style={styles.weatherCityText}>{this.state.city}, {this.state.country}</Text>

            <Text style={styles.weatherTempText}>{this.state.currentTemp} &deg;F </Text>

            <Text style={styles.weatherDescriptionText}>{this.state.descr}</Text>
          </View>
          
          { condensedForecast ? 
            condensedForecast.map( (day, i) => {
              
              let iconSrc = getWeatherIcon(day.icon); 

              return (
                <View key={day.date} style={styles.contentContainer}>

                  <View style={styles.textHolder}>
                    <Text style={styles.weatherForecastText}>{day.date}</Text>
                    <Text style={styles.weatherForecastText}>{day.temp} &deg;F</Text>
                    <Text style={styles.weatherForecastText}>{day.desc}</Text>
                  </View>

                  <Image
                    style={styles.iconImage}
                    source={iconSrc}
                    // source={iconSrc}
                  ></Image>

                </View>
              )
          })
          : null
          }

          
          </ScrollView>
        </ImageBackground>

      </View>
    );
  }
}

//AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
