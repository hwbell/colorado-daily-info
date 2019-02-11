import { StyleSheet } from 'react-native';

export default HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
  },
  textHolder: {
    paddingTop: 25,
    paddingLeft: 30,
    width: 150,
  },
  largeTextHolder: {
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
  },
  iconImage: {
    borderRadius: 10,
    marginRight: 20,
    marginTop: 18,
    width: 40, 
    height: 40,

  },
  weatherTodayCityText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontWeight: '400',
    marginTop: 60,
    marginBottom: 10,
  },
  weatherTodayDescText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontWeight: '400',
  },
  weatherTodayTempText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'Avenir-Roman',
  },
  
  weatherForecastText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Avenir-Roman',
    fontWeight: 'bold'
  }
});

