import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image } from 'react-native';
import { AppLoading, Asset, Font, Icon, SplashScreen } from 'expo';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    //SplashScreen.preventAutoHide();
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View style={{ flex: 1 }}>
          <Image
            source={require('./assets/images/skiing-intro.gif')}
            onLoad={this._loadResourcesAsync}
            onLoadEnd={() => this.loadFinished}
            fadeDuration={400} // we need to adjust Android devices (https://facebook.github.io/react-native/docs/image#fadeduration) fadeDuration prop to `0` as it's default value is `300` 
          />
        </View>
      );
    }
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    
  }

  loadFinished () { // wait for image's content to fully load [`Image#onLoadEnd`] (https://facebook.github.io/react-native/docs/image#onloadend)
    // console.log('Image#onLoadEnd: hiding SplashScreen');
    SplashScreen.hide(); // Image is fully presented, instruct SplashScreen to hide
  }

  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  _loadResourcesAsync = async () => {
    await this.timeout(3000);
    await Promise.all([
      
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
        require('./assets/images/icons/abasin.png'),
        require('./assets/images//icons/keystone.png'),
        require('./assets/images/icon.png'),
        
        // require('./assets/images/backgrounds/rain.jpg'),
        require('./assets/images/icons/snow.png'),
        
        require('./assets/images/backgrounds/snowbg.png'),
        require('./assets/images/splash.png'),
        require('./assets/images/icons/traffic.png'),
        require('./assets/images/backgrounds/trafficbg.jpg'),
        require('./assets/images/icons/weather.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
      
    ])
    
    this._handleFinishLoading();
    
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    //SplashScreen.hide();    
    this.setState({ isReady: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
