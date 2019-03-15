import { StyleSheet } from 'react-native';

export default HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 80, 255, 0.5)',
  },
  contentContainer: {
    // flex: 0, 
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: { 
    fontFamily: 'Cabin-Bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontWeight: '400',
    margin: 50,
  },
  subtitle: {
    fontFamily: 'Cabin',
    textAlign: 'left',
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 20
  },
  createdBy: {
    fontFamily: 'Cabin',
    textAlign: 'left',
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 30
  },

  paragraph: {
    fontFamily: 'Cabin',
    margin: 20,
    fontSize: 20,
    fontWeight: '400',
    color: 'white'
  },
  creditsContainer: {
    // width: '100%',
  },  
  credit: {
    fontFamily: 'Cabin',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  toolLink: {
    fontFamily: 'Cabin',
    margin: 0,
    marginLeft: 35,
    fontSize: 20,
    fontWeight: '400',
    color: '#00FFFF'
  },
  linkText: {
    fontFamily: 'Cabin',
    margin: 5,
    fontSize: 12,
    fontWeight: '400',
    color: '#00FFFF'
  },
  authorCreditText: {
    fontFamily: 'Cabin',
    textAlign: 'left',
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
    margin: 5,
  },
  
});

