
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  AppRegistry,
  Image,
  ImageBackground,
  Text,
  TouchableHighlight,
  Button
} from 'react-native';

import styles from './WeatherScreen.styles';

//const navigation = this.props.navigation;

const text = {
  'header': 'Weather'
}

// get bg and Icon from custom made list instead of openWeatherMap's built in
// icons since they aren't very good. also they don't have backgrounds.
const weatherIconList = {
  '01d': {
    bg: '../assets/weather/backgrounds/day/clear-day.png',
    icon: '',
    descr: 'clear sky',
  },
  '01n': {
    bg: '../assets/weather/backgrounds/night/clear-night.png',
    icon: '',
    descr: 'clear sky',
  },
  '02d': {
    bg: '../assets/weather/backgrounds/day/few-clouds-day.png',
    icon: '',
    descr: 'few clouds',
  },
  '02n': {
    bg: '../assets/weather/backgrounds/night/few-clouds-night.png',
    icon: '',
    descr: 'few clouds',
  },
  '03d': {
    bg: '../assets/weather/backgrounds/day/few-clouds-day.png',
    icon: '',
    descr: 'scattered clouds',
  },
  '03n': {
    bg: '../assets/weather/backgrounds/night/few-clouds-night.png',
    icon: '',
    descr: 'scattered clouds',
  },
  '04d': {
    bg: '../assets/weather/backgrounds/day/few-clouds-day.png',
    icon: '',
    descr: 'broken clouds',
  },
  '04n': {
    bg: '../assets/weather/backgrounds/night/few-clouds-night.png',
    icon: '',
    descr: 'broken clouds',
  },
  '09d': {
    bg: '../assets/weather/backgrounds/day/rain-day.png',
    icon: '',
    descr: 'shower rain',
  },
  '09n': {
    bg: '../assets/weather/backgrounds/night/rain-night.png',
    icon: '',
    descr: 'broken clouds',
  },
  '10d': {
    bg: '../assets/weather/backgrounds/day/rain-day.png',
    icon: '',
    descr: 'rain',
  },
  '10n': {
    bg: '../assets/weather/backgrounds/night/rain-night.png',
    icon: '',
    descr: 'rain',
  },
  '11d': {
    bg: '../assets/weather/backgrounds/thunderstorm.jpg',
    icon: '',
    descr: 'thunderstorm',
  },
  '11n': {
    bg: '../assets/weather/backgrounds/thunderstorm.jpg',
    icon: '',
    descr: 'thunderstorm',
  },
  '13d': {
    bg: '../assets/weather/backgrounds/day/snow-day.png',
    icon: '',
    descr: 'snow',
  },
  '13n': {
    bg: '../assets/weather/backgrounds/night/snow-night.png',
    icon: '',
    descr: 'snow',
  },
  '50d': {
    bg: '',
    icon: '',
    descr: 'mist',
  },
  '50n': {
    bg: '../assets/weather/backgrounds/mist.jpg',
    icon: '',
    descr: 'mist',
  },

}

const getWeatherIcon = (id) => {

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

export default class WeatherScreen extends Component {
  state = {
    city: '',
    country: '',
    todayWeather: '',
    forecast: [],
    currentTemp: '',
    highTemp: '',
    lowTemp: '',
    descr: '',
    humidity: '',
    windSpeed: '',
    windDir: '',
    
  }

  componentDidMount() {
    return fetch('https://lit-falls-35438.herokuapp.com/weather')
      .then((response) => response.json())
      .then((response) => {
        const todayWeather = response.list[0];
        //console.log(response);
        this.setState({
          city: response.city.name,
          country: response.city.country,
          todayWeather: todayWeather,
          forecast: makeForeCastList(response.list),
          currentTemp: convertTemp(todayWeather.main.temp),
          highTemp: todayWeather.main.temp_max,
          lowTemp: todayWeather.main.temp_min,
          descr: todayWeather.weather[0].description,
          humidity: todayWeather.main.humidity,
          windSpeed: todayWeather.wind.speed,
          windDir: todayWeather.wind.deg,
          
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const resizeMode = 'cover';
    const condensedForecast = this.state.forecast[1];
    
    return (

      <ScrollView style={styles.container}>
        <ImageBackground
          style={{ flex: 1 }}
          opacity={1}
          imageStyle={{ resizeMode: 'stretch' }}
          source={require('../assets/images/backgrounds/rain.jpg')}
        >

          <View style={styles.largeTextHolder}>
            <Text style={styles.weatherCityText}>{this.state.city}, {this.state.country}</Text>

            <Text style={styles.weatherTempText}>{this.state.currentTemp} &deg;F </Text>

            <Text style={styles.weatherDescriptionText}>{this.state.descr}</Text>
          </View>
          
          { condensedForecast ? 
            condensedForecast.map( (day, i) => {
            return (
              <View key={day} style={styles.contentContainer}>

                <View style={styles.textHolder}>
                  <Text style={styles.weatherForecastText}>{day.date}</Text>
                  <Text style={styles.weatherForecastText}>{day.temp} &deg;F</Text>
                  <Text style={styles.weatherForecastText}>{day.desc}</Text>
                </View>

                <Image
                  style={styles.iconImage}
                  source={{uri: `http://openweathermap.org/img/w/${day.icon}.png`}}
                ></Image>

              </View>
            )
          })
          : null
          }

          

        </ImageBackground>

      </ScrollView>
    );
  }
}

//AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
