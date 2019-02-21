import { StyleSheet } from 'react-native';

export default HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
   // alignItems: 'center',
    backgroundColor: 'rgba(0, 80, 255, 0.5)',
  },
  largeTextHolder: {
    backgroundColor: 'rgba(0, 80, 255, 0.5)',
  },  
  contentContainer: {
    paddingTop: 10,
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topIconHolder: {
    backgroundColor: 'rgba(0, 80, 255, 0.5)',
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
    paddingTop: 25,
    paddingLeft: 20,
    width: '40%',
  },

  iconHolder: {
    width: '20%',
  },
  iconImage: {
    borderRadius: 10,
    marginRight: 20,
    marginTop: 18,
    width: 45,
    height: 45
  },
  weatherTodayCityText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 28,
    fontWeight: '400',
    marginTop: 30,
    marginBottom: 10,
  },
  weatherTodayDescText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 28,
    fontWeight: '400',
  },
  weatherTodayTempText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    fontFamily: 'Avenir-Roman',
  },
  
  weatherForecastDescText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Avenir-Roman',
    fontWeight: 'bold'
  },
  weatherForecastTempText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Avenir-Roman',
    fontWeight: 'bold'
  }
});

