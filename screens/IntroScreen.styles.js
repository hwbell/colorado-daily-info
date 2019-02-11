import { StyleSheet } from 'react-native';

export default HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#5BA2DB'
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
    backgroundColor: '#5BA2DB'
  },

  button: {
    margin: 10,
    borderColor: '#5B5BDB',
    borderRadius: 25,
    width: 200,
    height: 60,
  },
  buttonText: {
    fontFamily: 'Avenir-Roman',
    fontWeight: 'bold'
  }

});

