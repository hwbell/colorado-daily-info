import React from 'react';
import { Icon } from 'expo';

import { PixelRatio, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Colors from '../constants/Colors';

export default class LinksList extends React.Component {
  render() {

    const toolsDisplay = this.props.links.map((link, i) => {
      return (
        <TouchableOpacity style={styles.link} key={i}>
          <Text style={styles.linkText}>{link}</Text>
        </TouchableOpacity>
      )
    });

    return (
      <View style={styles.container}>
        
        {toolsDisplay}
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