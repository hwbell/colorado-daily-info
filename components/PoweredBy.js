import React from 'react';
import Modal from "react-native-modal";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import WebViewer from '../components/WebViewer';
export default class PoweredBy extends React.Component {

  constructor(props) {
    super(props);
    this.handleLink = this.handleLink.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      showWebView: false,
      webViewUrl: undefined
    };
  }

  componentDidMount() {
    // 
  }

  handleLink(url) {
    this.setState({
      showWebView: true,
      webViewUrl: url
    })
  }

  closeModal() {
    this.setState({
      showWebView: false
    })
  }

  render() {
    return (
      <View style={styles.main}>

        <Text style={styles.text}>
          Powered by
        </Text>
        <View style={styles.linkContainer}>
          {this.props.source.map((source, i) => {
            return (
              <View key={i}>
                <TouchableOpacity
                  onPress={() => this.handleLink(this.props.source[i])}>
                  <Text style={styles.link}>{` ${this.props.name[i]} `}</Text>
                </TouchableOpacity>

                <Modal style={{ margin: 0 }} isVisible={this.state.showWebView}>

                  <WebViewer url={this.state.webViewUrl} closeModal={this.closeModal} />

                </Modal>
              </View>
            )
          })}
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 40,
    paddingLeft: 15,
  },
  text: {
    fontFamily: 'Cabin',
    fontSize: 16,
    color: 'white'
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  link: {
    fontFamily: 'Cabin-Bold',
    fontSize: 16,
    color: '#D6EAF8',
  }
});
