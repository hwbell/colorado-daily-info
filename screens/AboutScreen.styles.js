import { StyleSheet } from 'react-native';

export default HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000417',
  },
  title: { 
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontWeight: '400',
    margin: 50,
  },
  subtitle: {
    textAlign: 'left',
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 20
  },
  author: {
    textAlign: 'left',
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 30
  },

  paragraph: {
    margin: 20,
    fontSize: 20,
    fontWeight: '400',
    color: 'white'
  },
  linkText: {
    margin: 0,
    marginLeft: 35,
    fontSize: 20,
    fontWeight: '400',
    color: '#2A46C8'
  }
  
});

