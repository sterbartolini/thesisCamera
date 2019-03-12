/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Map from './src/components/Map';
import ReportIncident from './src/components/ReportIncident';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Login /> */}
        {/* <Register /> */}
        <Map />
        <ReportIncident />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#455a64',
  },
});
