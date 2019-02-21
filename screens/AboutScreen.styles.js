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
  createdBy: {
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
  credit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  toolLink: {
    margin: 0,
    marginLeft: 35,
    fontSize: 20,
    fontWeight: '400',
    color: '#2A46C8'
  },
  linkText: {
    margin: 5,
    fontSize: 12,
    fontWeight: '400',
    color: '#2A46C8'
  },
  authorCreditText: {
    textAlign: 'left',
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
    margin: 5,
  },
  
});

