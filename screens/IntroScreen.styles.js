import { StyleSheet } from 'react-native';

export default HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0, 80, 255, 0.5)',
  },
  header: {
    paddingBottom: 30,
    width: 200,
    fontWeight: 'bold',
    fontFamily: 'Avenir-Roman',
    color: 'white'
  },
  buttonContainer: {
    paddingTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'none'
  },

  button: {
    margin: 10,
    // borderColor: '#5B5BDB',
    borderRadius: 25,
    width: 200,
    height: 60,
  },
  buttonText: {
    fontFamily: 'Avenir-Roman',
    fontWeight: 'bold'
  }

});

