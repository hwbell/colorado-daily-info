
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  WebView,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import { Button, Text } from 'react-native-elements';
import Modal from "react-native-modal";
import WebViewer from '../components/WebViewer';
import styles from '../screens/AboutScreen.styles';

const getCredits = (handleLink) => {

  return {
    clearDayIcon: {
      name: 'clear day icon',
      html: (
        <View style={styles.credit}>
          <Text style={styles.authorCreditText}>clear day icon - </Text>

          <TouchableOpacity onPress={() => handleLink("https://www.flaticon.com/authorCreditTexts/dinosoftlabs")}>
            {/* title="DinosoftLabs"> */}
            <Text style={styles.linkText}> DinosoftLabS</Text>
          </TouchableOpacity>

          <Text style={styles.authorCreditText}>from</Text>

          <TouchableOpacity onPress={() => handleLink("https://www.flaticon.com/")}>
            {/* title="Flaticon"> */}
            <Text style={styles.linkText}>www.flaticon.com</Text>
          </TouchableOpacity>


        </View>
      ),

    },
    clearNightIcon: {
      name: 'clear night icon',
      html: (
        <View style={styles.credit}>
          <Text style={styles.authorCreditText}>clear night icon - </Text>

          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/authorCreditTexts/vectors-market")}>
            {/* // title="Vectors Market"> */}
            <Text style={styles.linkText}> Vectors Market</Text>
          </TouchableOpacity>

          <Text style={styles.authorCreditText}>from</Text>

          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/")}>
            {/* // title="Flaticon"> */}
            <Text style={styles.linkText}>www.flaticon.com</Text>
          </TouchableOpacity>


        </View>
      )
    },

    fewCloudsDayIcon: {
      name: 'few clouds day icon',
      html: (
        <View style={styles.credit}>
          <Text style={styles.authorCreditText}>few clouds day icon - </Text>

          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/authorCreditTexts/good-ware")}>
            {/* title="Good Ware"> */}
            <Text style={styles.linkText}> Good Ware</Text>
          </TouchableOpacity>
          <Text style={styles.authorCreditText}>from</Text>

          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/")}>
            {/* // title="Flaticon"> */}
            <Text style={styles.linkText}>www.flaticon.com</Text>
          </TouchableOpacity>


        </View>
      )
    },
    fewCloudsNightIcon: {
      name: 'few clouds night icon',
      html: (
        <View style={styles.credit}>
          <Text style={styles.authorCreditText}>few clouds night icon - </Text>
          <TouchableOpacity
            onPress={() => handleLink("http://www.freepik.com")}>
            {/* // title="Freepik"> */}
            <Text style={styles.linkText}> Freepik</Text>
          </TouchableOpacity>

          <Text style={styles.authorCreditText}>from</Text>

          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/")}>
            {/* // title="Flaticon"> */}

            <Text style={styles.linkText}>www.flaticon.com</Text>
          </TouchableOpacity>


        </View>
      )
    },

    // all these are the same as overcastCloudNightIcon
    // brokenCloudsDayIcon: '<View> Icons -  <TouchableOpacity onPress={handleLink("http://www.freepik.com" title="Freepik">Freepik</TouchableOpacity>  from <TouchableOpacity onPress={handleLink("https://www.flaticon.com/" title="Flaticon">www.flaticon.com</TouchableOpacity>  is licensed by <TouchableOpacity onPress={handleLink("http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</TouchableOpacity> </View> ',
    // brokenCloudsNightIcon: '<View> Icons -  <TouchableOpacity onPress={handleLink("http://www.freepik.com" title="Freepik">Freepik</TouchableOpacity>  from <TouchableOpacity onPress={handleLink("https://www.flaticon.com/" title="Flaticon">www.flaticon.com</TouchableOpacity>  is licensed by <TouchableOpacity onPress={handleLink("http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</TouchableOpacity> </View> ',
    // overcastCloudsDayIcon: '<View> Icons -  <TouchableOpacity onPress={handleLink("http://www.freepik.com" title="Freepik">Freepik</TouchableOpacity>  from <TouchableOpacity onPress={handleLink("https://www.flaticon.com/" title="Flaticon">www.flaticon.com</TouchableOpacity>  is licensed by <TouchableOpacity onPress={handleLink("http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</TouchableOpacity> </View> ',
    brokenCloudsDayIcon: {
      name: 'broken clouds day icon',
      html: (
        <View style={styles.credit}>
          <Text style={styles.authorCreditText}>broken clouds day icon - </Text>
          <TouchableOpacity
            onPress={() => handleLink("http://www.freepik.com")}>
            {/* title="Freepik"> */}

            <Text style={styles.linkText}> Freepik</Text>
          </TouchableOpacity>

          <Text style={styles.authorCreditText}>from</Text>

          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/")}>
            {/* title="Flaticon"> */}

            <Text style={styles.linkText}>www.flaticon.com</Text>

          </TouchableOpacity>


        </View>
      )
    },
    brokenCloudsNightIcon: {
      name: 'broken clouds night icon',
      html: (
        <View style={styles.credit}>
          <Text style={styles.authorCreditText}>broken clouds night icon - </Text>
          <TouchableOpacity
            onPress={() => handleLink("http://www.freepik.com")}>
            {/* title="Freepik"> */}

            <Text style={styles.linkText}> Freepik</Text>
          </TouchableOpacity>

          <Text style={styles.authorCreditText}>from</Text>

          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/")}>
            {/* title="Flaticon"> */}

            <Text style={styles.linkText}>www.flaticon.com</Text>

          </TouchableOpacity>


        </View>
      )
    },
    overcastCloudsDayIcon: {
      name: 'overcast cloud day icon',
      html: (
        <View style={styles.credit}>
          <Text style={styles.authorCreditText}>overcast cloud day icon - </Text>
          <TouchableOpacity
            onPress={() => handleLink("http://www.freepik.com")}>
            {/* title="Freepik"> */}

            <Text style={styles.linkText}> Freepik</Text>
          </TouchableOpacity>

          <Text style={styles.authorCreditText}>from</Text>

          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/")}>
            {/* title="Flaticon"> */}

            <Text style={styles.linkText}>www.flaticon.com</Text>

          </TouchableOpacity>


        </View>
      )
    },
    overcastCloudNightIcon: {
      name: 'overcast cloud night icon',
      html: (
        <View style={styles.credit}>
          <Text style={styles.authorCreditText}>overcast cloud night icon - </Text>
          <TouchableOpacity
            onPress={() => handleLink("http://www.freepik.com")}>
            {/* title="Freepik"> */}

            <Text style={styles.linkText}> Freepik</Text>
          </TouchableOpacity>

          <Text style={styles.authorCreditText}>from</Text>

          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/")}>
            {/* title="Flaticon"> */}

            <Text style={styles.linkText}>www.flaticon.com</Text>

          </TouchableOpacity>


        </View>
      )
    },

    // all these are the same as mistIcon
    // rainIcon: '<View> Icons -  <TouchableOpacity onPress={handleLink("http://www.freepik.com" title="Freepik">Freepik</TouchableOpacity>  from <TouchableOpacity onPress={handleLink("https://www.flaticon.com/" title="Flaticon">www.flaticon.com</TouchableOpacity>  is licensed by <TouchableOpacity onPress={handleLink("http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</TouchableOpacity> </View> ',
    // thunderStormIcon: '<View> Icons -  <TouchableOpacity onPress={handleLink("http://www.freepik.com" title="Freepik">Freepik</TouchableOpacity>  from <TouchableOpacity onPress={handleLink("https://www.flaticon.com/" title="Flaticon">www.flaticon.com</TouchableOpacity>  is licensed by <TouchableOpacity onPress={handleLink("http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</TouchableOpacity> </View> ',
    // snowIcon: '<View> Icons -  <TouchableOpacity onPress={handleLink("http://www.freepik.com" title="Freepik">Freepik</TouchableOpacity>  from <TouchableOpacity onPress={handleLink("https://www.flaticon.com/" title="Flaticon">www.flaticon.com</TouchableOpacity>  is licensed by <TouchableOpacity onPress={handleLink("http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</TouchableOpacity> </View> ',

    snowIcon: {
      name: 'snow icon',
      html: (
        <View style={styles.credit}>
          <Text style={styles.authorCreditText}>snow icon - </Text>
          <TouchableOpacity
            onPress={() => handleLink("http://www.freepik.com")}>
            {/* title="Freepik"> */}

            <Text style={styles.linkText}> Freepik</Text>
          </TouchableOpacity>

          <Text style={styles.authorCreditText}>from</Text>

          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/")}>
            {/* title="Flaticon"> */}
            <Text style={styles.linkText}>www.flaticon.com</Text>

          </TouchableOpacity>


        </View>
      )
    },
    thunderStormIcon: {
      name: 'thunderstorm icon',
      html: (
        <View style={styles.credit}>
          <Text style={styles.authorCreditText}>thunderstorm icon - </Text>
          <TouchableOpacity
            onPress={() => handleLink("http://www.freepik.com")}>
            {/* title="Freepik"> */}

            <Text style={styles.linkText}> Freepik</Text>
          </TouchableOpacity>

          <Text style={styles.authorCreditText}>from</Text>

          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/")}>
            {/* title="Flaticon"> */}
            <Text style={styles.linkText}>www.flaticon.com</Text>

          </TouchableOpacity>


        </View>
      )
    },
    rainIcon: {
      name: 'rain icon',
      html: (
        <View style={styles.credit}>
          <Text style={styles.authorCreditText}>rain icon - </Text>
          <TouchableOpacity
            onPress={() => handleLink("http://www.freepik.com")}>
            {/* title="Freepik"> */}

            <Text style={styles.linkText}> Freepik</Text>
          </TouchableOpacity>

          <Text style={styles.authorCreditText}>from</Text>

          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/")}>
            {/* title="Flaticon"> */}
            <Text style={styles.linkText}>www.flaticon.com</Text>

          </TouchableOpacity>


        </View>
      )
    },
    mistIcon: {
      name: 'mist icon',
      html: (
        <View style={styles.credit}>
          <Text style={styles.authorCreditText}>mist icon - </Text>
          <TouchableOpacity
            onPress={() => handleLink("http://www.freepik.com")}>
            {/* title="Freepik"> */}

            <Text style={styles.linkText}> Freepik</Text>
          </TouchableOpacity>

          <Text style={styles.authorCreditText}>from</Text>

          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/")}>
            {/* title="Flaticon"> */}
            <Text style={styles.linkText}>www.flaticon.com</Text>

          </TouchableOpacity>


        </View>
      )
    },


    windIcon: {
      name: 'wind icon',
      html: (
        <View style={styles.credit}>
          <Text style={styles.authorCreditText}>wind icon - </Text>
          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/authorCreditTexts/vitaly-gorbachev")}>
            {/* title="Vitaly Gorbachev"> */}

            <Text style={styles.linkText}> Vitaly Gorbachev</Text>

          </TouchableOpacity>

          <Text style={styles.authorCreditText}>from</Text>

          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/")}>
            {/* title="Flaticon"> */}

            <Text style={styles.linkText}>www.flaticon.com</Text>
          </TouchableOpacity>


        </View>
      )
    },

    // tab navigator / weather header icons
    // these are all the same as mountain
    // traffic: '<View> Icons -  <TouchableOpacity onPress={handleLink("https://www.freepik.com/" title="Freepik">Freepik</TouchableOpacity>  from <TouchableOpacity onPress={handleLink("https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</TouchableOpacity>  is licensed by <TouchableOpacity onPress={handleLink("http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</TouchableOpacity> </View> ',
    // question: '<View> Icons -  <TouchableOpacity onPress={handleLink("https://www.freepik.com/" title="Freepik">Freepik</TouchableOpacity>  from <TouchableOpacity onPress={handleLink("https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</TouchableOpacity>  is licensed by <TouchableOpacity onPress={handleLink("http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</TouchableOpacity> </View> ',
    // city: '<View> Icons -  <TouchableOpacity onPress={handleLink("https://www.freepik.com/" title="Freepik">Freepik</TouchableOpacity>  from <TouchableOpacity onPress={handleLink("https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</TouchableOpacity>  is licensed by <TouchableOpacity onPress={handleLink("http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</TouchableOpacity> </View> ',
    mountainIcon: {
      name: 'mountain icon',
      html: (
        <View style={styles.credit}>
          <Text style={styles.authorCreditText}>mountain icon - </Text>
          <TouchableOpacity
            onPress={() => handleLink("https://www.freepik.com/")}>
            {/* title="Freepik"> */}

            <Text style={styles.linkText}>Freepik</Text>
          </TouchableOpacity>

          <Text style={styles.authorCreditText}>from</Text>

          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/")}>
            {/* title="Flaticon"> */}

            <Text style={styles.linkText}>www.flaticon.com</Text>

          </TouchableOpacity>


        </View>
      )
    },

    weatherIcon: {
      name: 'weather icon',
      html: (
        <View style={styles.credit}>
          <Text style={styles.authorCreditText}>weather icon - </Text>
          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/authorCreditTexts/iconnice")}>
            {/* title="Iconnice"> */}

            <Text style={styles.linkText}> Iconnice</Text>

          </TouchableOpacity>

          <Text style={styles.authorCreditText}>from</Text>

          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/")}>
            {/* title="Flaticon"> */}

            <Text style={styles.linkText}>www.flaticon.com</Text>
          </TouchableOpacity>



        </View>
      )
    },
    powIcon: {
      name: 'pow icon',
      hmtl: (
        <View style={styles.credit}>
          <Text style={styles.authorCreditText}>pow icon - </Text>
          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/authorCreditTexts/smashicons")}>
            {/* title="Smashicons"> */}

            <Text style={styles.linkText}> Smashicons</Text>


          </TouchableOpacity>

          <Text style={styles.authorCreditText}>from</Text>

          <TouchableOpacity
            onPress={() => handleLink("https://www.flaticon.com/")}>
            {/* title="Flaticon"> */}

            <Text style={styles.linkText}>www.flaticon.com</Text>

          </TouchableOpacity>


        </View>
      )
    },

    // backgrounds
    clearDayBackground: 'Pixabay free license',
    clearNightBackground: 'Pixabay free license',
    fewCloudsNightground: 'Pixabay free license',
    overcastCloudDayBackground: 'Pixabay free license',
    overcastCloudNightBackground: 'Pixabay free license',
    mistBackground: 'Pixabay free license',

    // same for day and night
    rainBackground: {
      name: 'rain background',
      html: (
        <TouchableOpacity
          onPress={() => handleLink("https://www.freepik.com/free-vector/classic-monsoon-season-composition-with-realistic-design_2686584.htm")}>

          <Text style={styles.linkText}>rain background Designed by Freepik</Text>
        </TouchableOpacity>
      )
    },

    fewCloudsBackground: {
      name: 'few clouds background',
      html: (
        <TouchableOpacity
          onPress={() => handleLink("https://www.freepik.com/free-vector/sky-with-clouds-and-city-background-in-flat-style_2126734.htm")}>

          <Text style={styles.linkText}>few clouds background Designed by Freepik</Text>
        </TouchableOpacity>
      )
    },


    thunderStormBackground: {
      name: 'thunderstorm background',
      html: (
        <TouchableOpacity
          onPress={() => handleLink("https://www.freepik.com/free-vector/sky-background-with-rain-and-thunder_2095471.htm")}>

          <Text style={styles.linkText}>thunderstorm background Designed by Brgfx</Text>
        </TouchableOpacity>
      )
    },

    snowStormBackground: {
      name: 'snow background',
      html: (
        <TouchableOpacity
          onPress={() => handleLink("https://www.freepik.com/free-photos-vectors/background")}>

          <Text style={styles.linkText}>snow background Designed by Freepik</Text>
        </TouchableOpacity>
      )
    },
  }

}
const displayCredits = (credits) => {
  return Object.keys(credits).map((prop, i) => {
    console.log(prop.name)
    return (
      <View key={i}>
        {credits[prop].html}
      </View>
    )
  });
}

export default class Credits extends Component {

  constructor(props) {
    super(props);
    this.handleLink = this.handleLink.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  state = {
    credits: {},
    showWebView: false,
    webViewUrl: undefined
  }

  componentDidMount() {
    let credits = getCredits(this.handleLink);
    this.setState({
      credits
    }, () => {
      console.log('credits: ')
      console.log(Object.keys(this.state.credits))
    })

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
      <ScrollView style={styles.creditsContainer}>

        <TouchableOpacity
          onPress={() => this.handleLink("http://creativecommons.org/licenses/by/3.0/")}>
          {/* title="Creative Commons BY 3.0"  */}
          {/* target="_blank"> */}

          <Text style={styles.paragraph}> All icons licensed by CC 3.0 BY</Text>
        </TouchableOpacity>

        {displayCredits(this.state.credits)}


        <Modal style={{ margin: 0 }} isVisible={this.state.showWebView}>

          <WebViewer url={this.state.webViewUrl} closeModal={this.closeModal}/>

        </Modal>

      </ScrollView>
    );
  }
}
