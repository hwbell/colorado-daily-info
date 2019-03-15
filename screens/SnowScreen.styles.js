import { StyleSheet } from 'react-native';

export default HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 80, 255, 0.5)',
  },
  topInfoHolder: {
    marginTop: 30
  },  

  contentContainer: {
    // flex: 0, 
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconImage: {
    borderRadius: 10,
    margin: 20,
    width: 80, 
    height: 80,

  },
  smallTextHolder: {
    marginTop: 18,
    // width: 250
  },
  summaryTextHolder: {
    justifyContent: 'center',
    margin: 18,
    backgroundColor: 'rgba(255,255,255,0.1)',
    // borderColor: 'rgba(245, 245, 245, 0.4)',
    // borderWidth: 0.4,
    borderRadius: 20,
  },
  numbersText: {
    textAlign: 'left',
    marginTop: 0,
    marginBottom: 0,
    color: 'white',
    fontSize: 20,
    fontFamily: 'Cabin',
  },
  descriptionText: {
    padding: 10,
    // paddingLeft: 20,
    textAlign: 'left',
    marginTop: 0,
    marginBottom: 0,
    color: 'white',
    fontSize: 20,
    fontFamily: 'Cabin',
  },
  
});

