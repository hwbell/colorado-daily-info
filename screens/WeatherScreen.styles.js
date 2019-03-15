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
    padding: 10,
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: 'rgba(245, 245, 245, 0.4)',
    borderWidth: 0.5,
    // borderRadius: 20,
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
    fontFamily: 'Cabin-Bold',
  },
  
  weatherSelector: {
    backgroundColor: 'rgba(41, 182, 246, 0.5)',
    borderColor: 'rgba(245, 245, 245, 0.4)',
    borderWidth: 0.4,
    borderRadius: 20,
  },  

  weatherForecastDescText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Cabin',
    fontWeight: 'bold'
  },
  weatherForecastTempText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Cabin',
    fontWeight: 'bold'
  }
});

