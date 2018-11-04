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
    alignItems: 'flex-start',
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
  },
  textHolder: {
    paddingTop: 25,
    paddingLeft: 30,
    width: 250,
  },
  largeTextHolder: {
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
  },
  iconImage: {
    borderRadius: 10,
    marginRight: 20,
    marginTop: 10,
    width: 80, 
    height: 80,

  },
  weatherCityText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontWeight: '400',
    marginTop: 80,
    marginBottom: 20,
  },
  weatherTempText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'Avenir-Roman',
    marginTop: 0,
    marginBottom: 20,
  },
  weatherDescriptionText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    marginTop: 0,
    marginBottom: 20,
  },
  weatherForecastText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Avenir-Roman',
    fontWeight: 'bold'
  }
});

