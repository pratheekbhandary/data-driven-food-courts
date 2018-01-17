import React from 'react';
import Expo from 'expo';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import ReduxThunk from 'redux-thunk';
import {Login} from './src/Router';
import reducers from './src/reducers/index'; 

export default class App extends React.Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAy6yR9cY1W_1fUMwr5ggUuEMF3--HVobM",
      authDomain: "data-driven-food-courts.firebaseapp.com",
      databaseURL: "https://data-driven-food-courts.firebaseio.com",
      projectId: "data-driven-food-courts",
      storageBucket: "data-driven-food-courts.appspot.com",
      messagingSenderId: "735749120522"
    });
  }
  render() {
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        <Login />
      </Provider>
    );
  }
}


Expo.registerRootComponent(App);

