import { StyleSheet } from 'react-native';

export default HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 80, 255, 0.5)',
  },
  title: {
    fontSize: 28,
    fontFamily: 'OpenSans',
    color: 'white',
    marginTop: 50
  },
  subtitle: {
    fontSize: 22,
    fontFamily: 'Cabin',
    color: 'white',
    margin: 30
  },
  buttonContainer: {
    paddingTop: 10,
    flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },

  inputsContainer: {
    // borderColor: 'white',
    
    flex: 1,
    flexDirection: 'row',
    margin: 0
  },
  fullWidthButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(245, 245, 245, 0.4)',
    borderWidth: 0.4,
    borderRadius: 20,
    height: '90%',
    width: '100%',
    margin: 0
  },
  fullWidthButtonText: {
    fontSize: 20,
    padding: 28,
    fontFamily: 'Cabin',
    color: 'white',
    textAlign: 'center',

  }

});

