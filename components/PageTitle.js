import React from 'react';

import { View, Text, StyleSheet, PixelRatio } from 'react-native';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class PageTitle extends React.Component {
  render() {
    return (
      <View style={styles.titleHolder}>
        <Text style={styles.title}>
          {this.props.title}
        </Text>

        <Text style={styles.subtitle}>
          {this.props.subtitle}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleHolder: {
    // marginTop: 18,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 16 * PixelRatio.get(),
    fontFamily: 'Cabin',
    color: 'white',
    marginTop: 50
  },
  subtitle: {
    fontSize: 12 * PixelRatio.get(),
    fontFamily: 'Cabin',
    color: 'white',
    margin: 18
  },
})