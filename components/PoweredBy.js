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

  closeModal () {
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
        <TouchableOpacity
          onPress={() => this.handleLink(this.props.source)}>
          <Text style={styles.link}>{this.props.name}</Text>
        </TouchableOpacity>

        <Modal style={{ margin: 0 }} isVisible={this.state.showWebView}>

          <WebViewer url={this.state.webViewUrl} closeModal={this.closeModal}/>

        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 10
  },
  text: {
    fontSize: 16,
    color: 'white'
  },
  link: {
    fontSize: 16,
    color: '#D500FF',
    fontWeight: '400',
  }
});
