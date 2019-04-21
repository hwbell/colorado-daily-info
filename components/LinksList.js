import React from 'react';
import { Icon } from 'expo';

import { PixelRatio, StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import Modal from "react-native-modal";
import WebViewer from '../components/WebViewer';

export default class LinksList extends React.Component {

  constructor(props) {
    super(props);

    this.handleLink = this.handleLink.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  state = {
    showWebView: false,
    webViewUrl: undefined
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

    // each item will be a separate key on the master object, so map through
    // the keys to get src, text
    const toolsDisplay = Object.keys(this.props.links).map((key, i) => {

      // reference the key to get that link from the master obj
      let link = this.props.links[`${key}`];

      return (
        <TouchableOpacity style={styles.link} key={i}
          onPress={() => this.handleLink(link.src)}>
          <Text style={styles.linkText}>{link.name}</Text>
        </TouchableOpacity>
      )
    });

    return (
      <View style={styles.container}>

        {toolsDisplay}


        <Modal style={{ margin: 0 }} isVisible={this.state.showWebView}>

          <WebViewer url={this.state.webViewUrl} closeModal={this.closeModal} />

        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  linkText: {
    fontFamily: 'Cabin',
    margin: 0,
    marginLeft: 35,
    fontSize: 10 * PixelRatio.get(),
    fontWeight: '400',
    color: '#00FFFF'
  },
})