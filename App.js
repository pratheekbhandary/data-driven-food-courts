import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import {Tabs} from './src/Router';

export default class App extends React.Component {
  render() {
    return (
        <Tabs />
    );
  }
}


Expo.registerRootComponent(App);

