/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import Login from './screens/Login';
import Home from './screens/Home';
import CustomArrangements from './screens/CustomArrangements'
import CustomArrangementDetails from './screens/CustomArrangementDetails';
import Cart from './screens/Cart';
import Flowercard from './components/Flowercard';
import Checkout from './screens/Checkout';
import AppNavigator from './navigation/AppNavigator'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }
  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }


  render() {
    const { isLoading } = this.state

    if (isLoading) {
      return <ImageBackground
        style={{ width: "100%", height: "100%", alignItems: 'center', justifyContent: 'center' }}
        source={require('./img/floristaBackground.jpg')}>
        <Text>FLORISTA LOGO</Text>
      </ImageBackground>
    }

    return (
      <AppNavigator/>
    );
  }
};

const styles = StyleSheet.create({

});