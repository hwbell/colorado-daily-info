import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet, TouchableOpacity, WebView, Image } from 'react-native';
import { Constants } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default class WebViewer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mediaLoading: true,
      // showModal: this.props.showModal
    };
    this.hideActivityIndicator = this.hideActivityIndicator.bind(this);
  }

  componentDidMount() {
    // 
  }

  hideActivityIndicator() {
    this.setState({
      mediaLoading: false,
    });
  }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }

  onBack() {
    this.refs.browser.goBack();
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.iconHolder}>

          <TouchableOpacity
            disabled={!this.state.canGoBack}
            onPress={this.onBack.bind(this)}>
            {/* <Text>back</Text> */}
            <FontAwesome key="twitter" name="arrow-circle-left" size={40} style={styles.icon} />

          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.props.closeModal}>
            {/* <Text>close</Text> */}
            <FontAwesome key="twitter" name="times-circle" size={40} style={styles.icon} />

          </TouchableOpacity>

        </View>

        {
          this.state.mediaLoading ?
            <ActivityIndicator
              size="large"
              color="#3498DB"
              style={styles.activityIndicator} />
            : null
        }

        <WebView
          ref='browser'
          onLoad={this.hideActivityIndicator}
          source={{ uri: this.props.url }}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}

        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  iconHolder: {
    width: '100%',
    height: 60,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    
  },
  icon: {
    color: 'whitesmoke',
    margin: 10,
  },
  activityIndicator: {
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    left: '46%'
  }
});
