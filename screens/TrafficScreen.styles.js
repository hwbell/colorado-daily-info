import { StyleSheet } from 'react-native';

export default HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 80, 255, 0.5)',
  },
  contentContainer: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  iconImage: {
    borderRadius: 10,
    margin: 20,
    width: 80, 
    height: 80,

  },
  
  textHolder: {
    marginTop: 18,
    width: 350,
  },
  trafficDescriptionText: {
    textAlign: 'left',
    marginTop: 0,
    marginBottom: 0,
    color: 'white',
    fontSize: 20,
    fontFamily: 'Avenir-Roman',
    fontWeight: 'bold'
  },
  
  
});

