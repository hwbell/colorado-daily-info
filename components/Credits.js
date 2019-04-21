
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { Button, Text } from 'react-native-elements';
import Modal from "react-native-modal";
import WebViewer from '../components/WebViewer';

const CreditsList = require('../constants/CreditsList');

console.log(CreditsList)

const displayCredits = (list, handleLink) => {

  console.log(list)
  // map through each property, or each credit and display

  return (
    Object.keys(list).map((credit) => {
      return (
        <View style={styles.credit}>
          <Text style={styles.authorCreditText}>{`${credit.name} -`} </Text>

          <TouchableOpacity
            onPress={() => handleLink(credit.authorLink)}>
            {/* // title="Vectors Market"> */}
            <Text style={styles.linkText}>{credit.author}</Text>
          </TouchableOpacity>

          <Text style={styles.authorCreditText}>from</Text>

          <TouchableOpacity
            onPress={() => handleLink(credit.siteLink)}>
            {/* // title="Flaticon"> */}
            <Text style={styles.linkText}>{credit.site}</Text>
          </TouchableOpacity>


        </View>
      )
    })
  )

}


// const displayCredits = (credits) => {
//   return Object.keys(credits).map((prop, i) => {
//     console.log(prop.name)
//     return (
//       <View key={i}>
//         {credits[prop].html}
//       </View>
//     )
//   });
// }

export default class Credits extends Component {

  constructor(props) {
    super(props);
    this.displayCredits = this.displayCredits.bind(this);
    this.handleLink = this.handleLink.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  state = {
    credits: CreditsList,
    showWebView: false,
    webViewUrl: undefined
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

  displayCredits(list, handleLink) {

    if (Object.keys(list)) {

      return (
        Object.keys(list).map((credit, i) => {

          // use the key to get whatever props you need
          let name = list[`${credit}`].name;
          let author = list[`${credit}`].author;
          let site = list[`${credit}`].site;
          let authorLink = list[`${credit}`].authorLink;
          let siteLink = list[`${credit}`].siteLink;

          return (
            <View key={i} style={styles.credit}>
              <Text style={styles.authorCreditText}>{`${name} -`} </Text>

              <TouchableOpacity
                onPress={() => handleLink(authorLink)}>
                {/* // title="Vectors Market"> */}
                <Text style={styles.linkText}>{author}</Text>
              </TouchableOpacity>

              <Text style={styles.authorCreditText}>from</Text>

              <TouchableOpacity
                onPress={() => handleLink(siteLink)}>
                {/* // title="Flaticon"> */}
                <Text style={styles.linkText}>{site}</Text>
              </TouchableOpacity>


            </View>
          )
        })
      )
    }
  }

  render() {

    return (
      <ScrollView contentContainerStyle={styles.creditsContainer}>

        <TouchableOpacity
          onPress={() => this.handleLink("http://creativecommons.org/licenses/by/3.0/")}>
          {/* title="Creative Commons BY 3.0"  */}
          {/* target="_blank"> */}

          <Text style={styles.paragraph}> All icons licensed with CC 3.0 BY</Text>
        </TouchableOpacity>

        {this.displayCredits(CreditsList.creditsList, this.handleLink)}

        <Modal style={{ margin: 0 }} isVisible={this.state.showWebView}>

          <WebViewer url={this.state.webViewUrl} closeModal={this.closeModal} />

        </Modal>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  creditsContainer: {
    margin: 25
  },
  paragraph: {
    fontFamily: 'Cabin',
    marginVertical: 15,
    fontSize: 20,
    fontWeight: '400',
    color: 'white'
  },
  credit: {
    fontFamily: 'Cabin',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
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

