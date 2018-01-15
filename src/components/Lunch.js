import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MenuItem from './MenuItem';


export default class Lunch extends Component {
    static navigationOptions = {
        title: 'Lunch',
      };
    render() {
        return (
                <MenuItem itemName={"Lunch"}/>
        );
    }
} 


