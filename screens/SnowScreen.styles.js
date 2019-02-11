import { StyleSheet } from 'react-native';

export default HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
  },
  contentContainer: {
    paddingTop: 30,
    flex: 0, 
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
  smallTextHolder: {
    marginTop: 18,
    width: 250
  },
  summaryTextHolder: {
    margin: 18,
    // width: 250
  },
  weatherDescriptionText: {
    textAlign: 'left',
    marginTop: 0,
    marginBottom: 0,
    color: 'white',
    fontSize: 20,
    fontFamily: 'Avenir-Roman',
    fontWeight: 'bold'
  },
  
});

